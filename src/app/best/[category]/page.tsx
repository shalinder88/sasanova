import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  categories,
  getToolsByCategory,
  getCategoryBySlug,
  getOverallScore,
} from "@/data/tools";
import ScoreBar from "@/components/ScoreBar";
import { breadcrumbJsonLd, canonicalUrl } from "@/lib/seo";
import { generateCategoryThesis } from "@/lib/category-thesis";

/** CTR-optimised titles: specific, searcher-friendly phrasing per category */
const CUSTOM_TITLES: Record<string, string> = {
  "newsletter-platforms": "Best Newsletter Platforms for Creators in 2026",
  "email-marketing": "Best Email Marketing Tools for Small Business in 2026",
  crm: "Best CRM Software for Small Teams in 2026",
  automation: "Best Automation Tools for Small Business in 2026",
};

/** Strip trailing product-type words so we never produce "Tools Tools" or "Assistants tool" */
function cleanName(name: string): string {
  return name.replace(/\s+(Tools?|Software|Platforms?|Apps?|Solutions?|Suites?|Builders?|Assistants?|Storage|Management|Services?|Surveys?|Contracts?|Commerce)$/i, '');
}

function bestTitle(name: string, slug?: string): string {
  if (slug && CUSTOM_TITLES[slug]) return CUSTOM_TITLES[slug];
  return `Best ${cleanName(name)} Tools for Small Business in 2026`;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};
  return {
    title: `${bestTitle(cat.name, cat.slug)}`,
    description: `Ranked list of the best ${cleanName(cat.name).toLowerCase()} tools in 2026, scored on value, ease-of-use, and power. Compare pricing, features, and honest ratings.`,
    alternates: { canonical: canonicalUrl(`/best/${category}`) },
    openGraph: {
      title: `${bestTitle(cat.name, cat.slug)} | Sasanova`,
      description: `Ranked list of the best ${cleanName(cat.name).toLowerCase()} tools in 2026.`,
      images: [{ url: `/og/best/${category}`, width: 1200, height: 630 }],
    },
  };
}

function pricingSummary(tool: import("@/data/tools").Tool): string {
  if (tool.freeTier) return "Free tier available";
  const first = tool.pricing[0];
  if (!first || first.priceMonthly === null) return "Custom pricing";
  return `From $${first.priceMonthly}/mo`;
}

export default async function BestCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const toolsInCategory = getToolsByCategory(category)
    .map((t) => ({ ...t, overall: getOverallScore(t.scores) }))
    .sort((a, b) => b.overall - a.overall);

  if (toolsInCategory.length === 0) notFound();

  const winner = toolsInCategory[0];
  const runnerUp = toolsInCategory[1];

  // JSON-LD ItemList
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${bestTitle(cat.name, cat.slug)}`,
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: toolsInCategory.length,
    itemListElement: toolsInCategory.map((tool, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: tool.name,
      url: `https://sasanova.com/tools/${tool.slug}`,
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
              { name: "Best Of", path: "/best" },
              { name: cat.name, path: `/best/${cat.slug}` },
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
              <Link href="/best" className="hover:text-accent transition-colors">Best Of</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground font-medium">{cat.name}</li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <section className="border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">Best Of</p>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
            {bestTitle(cat.name, cat.slug)}
          </h1>
          {/* AEO answer-first summary — single definitive sentence */}
          <p className="text-base text-muted max-w-3xl leading-relaxed">
            The highest-scoring option in 2026 is{" "}
            <strong className="text-foreground">{winner.name}</strong> ({winner.overall}/10){runnerUp ? <>, followed by {runnerUp.name} ({runnerUp.overall}/10)</> : null}.
          </p>
        </div>
      </section>

      {/* Category Thesis */}
      {(() => {
        const thesis = generateCategoryThesis(category, cat.name, toolsInCategory);
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-surface-alt border border-border rounded-xl p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">{thesis.heading}</h2>
              {thesis.paragraphs.map((p, i) => (
                <p key={i} className="text-sm text-muted leading-relaxed mb-3 last:mb-0">
                  {p}
                </p>
              ))}
              <h3 className="text-base font-semibold mt-5 mb-3">Common Mistakes</h3>
              <ul className="space-y-2">
                {thesis.mistakes.map((m, i) => (
                  <li key={i} className="text-sm text-muted leading-relaxed flex gap-2">
                    <span className="shrink-0 text-accent font-bold">&bull;</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })()}

      {/* Ranked list */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {toolsInCategory.map((tool, i) => {
              const rank = i + 1;
              const isWinner = rank === 1;
              return (
                <div
                  key={tool.slug}
                  className={`relative border rounded-xl p-5 transition-all hover-glow cursor-pointer ${
                    isWinner
                      ? "border-accent bg-accent-light/50"
                      : "border-border bg-background"
                  }`}
                >
                  <Link href={`/tools/${tool.slug}`} className="absolute inset-0 z-0 rounded-xl" aria-label={`View ${tool.name}`} />
                  <div className="flex items-start gap-4 relative z-10 pointer-events-none">
                    {/* Rank */}
                    <div
                      className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-extrabold ${
                        isWinner
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
                            <h2 className="text-lg font-bold">{tool.name}</h2>
                            {tool.badge && (
                              <span className="text-[10px] font-semibold text-accent bg-accent-light px-2 py-0.5 rounded-full">
                                {tool.badge}
                              </span>
                            )}
                            {isWinner && (
                              <span className="text-[10px] font-semibold text-success bg-success-light px-2 py-0.5 rounded-full">
                                Top Pick
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted mt-0.5">{tool.tagline}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-2xl font-extrabold text-accent">{tool.overall}</p>
                          <p className="text-[10px] text-muted">/ 10</p>
                        </div>
                      </div>

                      {/* Scores */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-1.5 mb-3">
                        <ScoreBar label="Value" value={tool.scores.value} />
                        <ScoreBar label="Ease" value={tool.scores.ease} />
                        <ScoreBar label="Power" value={tool.scores.power} />
                      </div>

                      {/* Meta row */}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
                        <span>{pricingSummary(tool)}</span>
                        <span className="w-px h-3 bg-border" />
                        {tool.bestFor[0] && (
                          <span className="px-2 py-0.5 bg-surface-alt rounded-full hover-pill">
                            Best for: {tool.bestFor[0]}
                          </span>
                        )}
                      </div>

                      {/* CTA */}
                      <div className="mt-4 flex flex-wrap gap-2 pointer-events-auto relative z-20">
                        <a
                          href={tool.affiliateUrl}
                          rel="noopener noreferrer sponsored"
                          target="_blank"
                          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-white hover:bg-accent/90 transition-colors"
                        >
                          Try {tool.name}
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                        </a>
                        <Link
                          href={`/tools/${tool.slug}`}
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
