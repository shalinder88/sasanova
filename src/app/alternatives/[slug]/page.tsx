import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  tools,
  getToolBySlug,
  getAlternatives,
  getOverallScore,
  type Tool,
  type ToolScore,
} from "@/data/tools";
import ScoreBar from "@/components/ScoreBar";
import { breadcrumbJsonLd, canonicalUrl } from "@/lib/seo";

export async function generateStaticParams() {
  return tools
    .filter((t) => t.alternatives.length > 0)
    .map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};
  return {
    title: `Best ${tool.name} Alternatives in 2026`,
    description: `Compare the best alternatives to ${tool.name} in 2026. Ranked by value, ease-of-use, and power with pricing breakdowns.`,
    alternates: { canonical: canonicalUrl(`/alternatives/${slug}`) },
  };
}

function pricingSummary(tool: Tool): string {
  if (tool.freeTier) return "Free tier available";
  const first = tool.pricing[0];
  if (!first || first.priceMonthly === null) return "Custom pricing";
  return `From $${first.priceMonthly}/mo`;
}

const scoreKeys: { key: keyof ToolScore; label: string }[] = [
  { key: "value", label: "Value" },
  { key: "ease", label: "Ease" },
  { key: "power", label: "Power" },
  { key: "transparency", label: "Transparency" },
];

function compareScores(alt: Tool, original: Tool) {
  const better: string[] = [];
  const worse: string[] = [];
  for (const { key, label } of scoreKeys) {
    const diff = alt.scores[key] - original.scores[key];
    if (diff >= 1) better.push(`${label} (${alt.scores[key]} vs ${original.scores[key]})`);
    if (diff <= -1) worse.push(`${label} (${alt.scores[key]} vs ${original.scores[key]})`);
  }
  return { better, worse };
}

export default async function AlternativesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool || tool.alternatives.length === 0) notFound();

  const alternatives = getAlternatives(tool)
    .map((t) => ({ ...t, overall: getOverallScore(t.scores) }))
    .sort((a, b) => b.overall - a.overall);

  if (alternatives.length === 0) notFound();

  const topAlt = alternatives[0];
  const toolOverall = getOverallScore(tool.scores);
  const topComparison = compareScores(topAlt, tool);

  // JSON-LD ItemList
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best ${tool.name} Alternatives in 2026`,
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: alternatives.length,
    itemListElement: alternatives.map((alt, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: alt.name,
      url: `https://sasanova.com/tools/${alt.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Alternatives", path: "/alternatives" },
              { name: `${tool.name} Alternatives`, path: `/alternatives/${tool.slug}` },
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
              <Link href="/alternatives" className="hover:text-accent transition-colors">Alternatives</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground font-medium">{tool.name} Alternatives</li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <section className="border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">Alternatives</p>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
            Best {tool.name} Alternatives in 2026
          </h1>
          {/* AEO answer-first summary */}
          <p className="text-base text-muted max-w-3xl leading-relaxed">
            The best alternative to{" "}
            <strong className="text-foreground">{tool.name}</strong> is{" "}
            <strong className="text-foreground">{topAlt.name}</strong> (scored {topAlt.overall}/10 vs {tool.name}&apos;s {toolOverall}/10)
            {topComparison.better.length > 0 && (
              <> because it scores higher on {topComparison.better.map((b) => b.split(" (")[0]).join(" and ")}</>
            )}.
            {" "}We compared {alternatives.length} alternatives across value, ease-of-use, power, and pricing transparency.
          </p>
        </div>
      </section>

      {/* AEO Answer Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-surface-alt border border-border rounded-lg p-4 mb-8">
          <p className="text-sm text-foreground leading-relaxed">
            The best <strong>{tool.name}</strong> alternative in 2026 is{" "}
            <strong>{topAlt.name}</strong> because it scores {topAlt.overall}/10 vs {tool.name}&apos;s {toolOverall}/10
            {topComparison.better.length > 0 && (
              <>, with higher marks in {topComparison.better.map((b) => b.split(" (")[0]).join(" and ")}</>
            )}.{" "}
            We evaluated {alternatives.length} alternatives on value, ease-of-use, power, and pricing transparency.
          </p>
        </div>
      </div>

      {/* Why people switch */}
      {tool.switchingTriggers && tool.switchingTriggers.length > 0 && (
        <section className="py-8 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-bold mb-3">Why People Switch from {tool.name}</h2>
            <div className="flex flex-wrap gap-2">
              {tool.switchingTriggers.map((trigger) => (
                <span
                  key={trigger}
                  className="px-3 py-1.5 text-xs bg-surface-alt border border-border rounded-full text-muted hover-item"
                >
                  {trigger}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Reference: original tool card */}
      <section className="py-6 border-b border-border bg-surface-alt/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-muted font-semibold uppercase tracking-wider mb-3">Comparing against</p>
          <div className="border border-border rounded-xl p-4 bg-background inline-flex items-center gap-4">
            <div>
              <p className="text-sm font-bold">{tool.name}</p>
              <p className="text-xs text-muted">{tool.tagline}</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-extrabold text-accent">{toolOverall}</p>
              <p className="text-[10px] text-muted">/ 10</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ranked alternatives */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {alternatives.map((alt, i) => {
              const rank = i + 1;
              const isTop = rank === 1;
              const { better, worse } = compareScores(alt, tool);

              return (
                <div
                  key={alt.slug}
                  className={`relative border rounded-xl p-5 transition-all hover-glow cursor-pointer ${
                    isTop
                      ? "border-accent bg-accent-light/50"
                      : "border-border bg-background"
                  }`}
                >
                  <Link href={`/tools/${alt.slug}`} className="absolute inset-0 z-0 rounded-xl" aria-label={`View ${alt.name}`} />
                  <div className="flex items-start gap-4 relative z-10 pointer-events-none">
                    {/* Rank */}
                    <div
                      className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-extrabold ${
                        isTop
                          ? "bg-accent text-white"
                          : "bg-surface-alt text-muted"
                      }`}
                    >
                      #{rank}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-lg font-bold">{alt.name}</h3>
                            {alt.badge && (
                              <span className="text-[10px] font-semibold text-accent bg-accent-light px-2 py-0.5 rounded-full">
                                {alt.badge}
                              </span>
                            )}
                            {isTop && (
                              <span className="text-[10px] font-semibold text-success bg-success-light px-2 py-0.5 rounded-full">
                                Top Alternative
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted mt-0.5">{alt.tagline}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-2xl font-extrabold text-accent">{alt.overall}</p>
                          <p className="text-[10px] text-muted">/ 10</p>
                        </div>
                      </div>

                      {/* Scores */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-1.5 mb-3">
                        <ScoreBar label="Value" value={alt.scores.value} />
                        <ScoreBar label="Ease" value={alt.scores.ease} />
                        <ScoreBar label="Power" value={alt.scores.power} />
                      </div>

                      {/* Comparison */}
                      <div className="flex flex-wrap gap-4 mb-3 text-xs">
                        {better.length > 0 && (
                          <div>
                            <span className="text-success font-semibold">Better than {tool.name}: </span>
                            <span className="text-muted">{better.join(", ")}</span>
                          </div>
                        )}
                        {worse.length > 0 && (
                          <div>
                            <span className="text-danger font-semibold">Lower than {tool.name}: </span>
                            <span className="text-muted">{worse.join(", ")}</span>
                          </div>
                        )}
                        {better.length === 0 && worse.length === 0 && (
                          <div className="text-muted">Scores are comparable to {tool.name}</div>
                        )}
                      </div>

                      {/* Meta row */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
                        <span>{pricingSummary(alt)}</span>
                        <span className="w-px h-3 bg-border" />
                        {alt.bestFor[0] && (
                          <span className="px-2 py-0.5 bg-surface-alt rounded-full hover-item">
                            Best for: {alt.bestFor[0]}
                          </span>
                        )}
                      </div>

                      {/* CTAs */}
                      <div className="mt-4 flex flex-wrap gap-2 pointer-events-auto relative z-20">
                        <a
                          href={alt.affiliateUrl}
                          rel="noopener noreferrer sponsored"
                          target="_blank"
                          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-white hover:bg-accent/90 transition-colors"
                        >
                          Try {alt.name}
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                        </a>
                        <Link
                          href={`/tools/${alt.slug}`}
                          className="inline-flex items-center px-4 py-2 text-xs font-semibold rounded-lg border border-border text-muted hover:text-accent hover:border-accent/30 transition-colors"
                        >
                          Full review
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
