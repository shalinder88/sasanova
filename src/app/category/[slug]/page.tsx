import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  categories,
  tools,
  getToolsByCategory,
  getCategoryBySlug,
  getOverallScore,
  type Tool,
} from "@/data/tools";
import ScoreBar from "@/components/ScoreBar";
import { breadcrumbJsonLd, canonicalUrl } from "@/lib/seo";

/* ---------- Static generation ---------- */

export async function generateStaticParams() {
  return categories
    .filter((cat) => getToolsByCategory(cat.slug).length >= 2)
    .map((cat) => ({ slug: cat.slug }));
}

/* ---------- Metadata ---------- */

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return {};
  const toolCount = getToolsByCategory(slug).length;
  return {
    title: `Best ${cat.name} Tools (2026) — Compare ${toolCount} Options`,
    description: `${cat.description} Compare the ${toolCount} best ${cat.name.toLowerCase()} tools in 2026 with honest scores, pricing, and feature breakdowns.`,
    alternates: { canonical: canonicalUrl(`/category/${slug}`) },
  };
}

/* ---------- Helpers ---------- */

function pricingSummary(tool: Tool): string {
  if (tool.freeTier) return "Free tier available";
  const paid = tool.pricing.filter((p) => p.priceMonthly !== null && p.priceMonthly > 0);
  if (paid.length === 0) return "Custom pricing";
  const min = Math.min(...paid.map((p) => p.priceMonthly as number));
  return `From $${min}/mo`;
}

type SortKey = "score" | "price" | "name";

function sortTools(
  list: (Tool & { overall: number })[],
  key: SortKey
): (Tool & { overall: number })[] {
  const sorted = [...list];
  switch (key) {
    case "score":
      return sorted.sort((a, b) => b.overall - a.overall);
    case "price": {
      const getMin = (t: Tool) => {
        const paid = t.pricing.filter((p) => p.priceMonthly !== null && p.priceMonthly > 0);
        if (paid.length === 0) return t.freeTier ? 0 : Infinity;
        return Math.min(...paid.map((p) => p.priceMonthly as number));
      };
      return sorted.sort((a, b) => getMin(a) - getMin(b));
    }
    case "name":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return sorted;
  }
}

/* ---------- Page ---------- */

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) notFound();

  const toolsInCategory = getToolsByCategory(slug).map((t) => ({
    ...t,
    overall: getOverallScore(t.scores),
  }));

  if (toolsInCategory.length < 2) notFound();

  // Default sort by score
  const sorted = sortTools(toolsInCategory, "score");
  const top3 = sorted.slice(0, 3);
  const winner = sorted[0];

  // Related categories (same cluster, excluding self)
  const relatedCategories = categories.filter(
    (c) => c.cluster === cat.cluster && c.slug !== cat.slug && getToolsByCategory(c.slug).length >= 2
  );

  // JSON-LD ItemList
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Best ${cat.name} Tools (2026)`,
    description: cat.description,
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: sorted.length,
    itemListElement: sorted.map((tool, i) => ({
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
              { name: "Categories", path: "/category" },
              { name: cat.name, path: `/category/${cat.slug}` },
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
              <Link href="/category" className="hover:text-accent transition-colors">Categories</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground font-medium">{cat.name}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">Category</p>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
            {cat.name}
          </h1>
          <p className="text-base text-muted max-w-3xl leading-relaxed mb-2">
            {cat.description}
          </p>
          <p className="text-sm text-muted">
            {sorted.length} tools compared
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* AEO Answer Block */}
        <div className="bg-surface-alt border border-border rounded-lg p-4 mb-8">
          <p className="text-sm text-foreground leading-relaxed">
            The best {cat.name.toLowerCase()} option in 2026 is{" "}
            <strong>{winner.name}</strong> with an overall score of {winner.overall}/10.{" "}
            {winner.tagline}.{" "}
            {winner.freeTier
              ? "It offers a free tier to get started."
              : `Paid plans start at $${Math.min(...winner.pricing.filter((p) => p.priceMonthly !== null && p.priceMonthly > 0).map((p) => p.priceMonthly as number))}/mo.`}{" "}
            <span className="text-muted">
              Rankings are based on our 6-axis scoring methodology covering value, ease-of-use, power, and transparency.
            </span>
          </p>
        </div>

        {/* Quick Comparison: Top 3 */}
        {top3.length >= 2 && (
          <section>
            <h2 className="text-xl font-bold mb-4">Quick Comparison: Top {top3.length}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-surface-alt">
                    <th className="text-left py-3 px-4 font-semibold text-muted">Criteria</th>
                    {top3.map((t) => (
                      <th key={t.slug} className="text-left py-3 px-4 font-semibold">
                        {t.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="table-row-hover">
                    <td className="py-3 px-4 text-muted font-medium hover-cell">Score</td>
                    {top3.map((t) => (
                      <td key={t.slug} className="py-3 px-4 hover-cell">
                        <span className="text-lg font-extrabold text-accent">{t.overall}</span>
                        <span className="text-xs text-muted"> / 10</span>
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-surface-alt/50 table-row-hover">
                    <td className="py-3 px-4 text-muted font-medium hover-cell">Price</td>
                    {top3.map((t) => (
                      <td key={t.slug} className="py-3 px-4 hover-cell">{pricingSummary(t)}</td>
                    ))}
                  </tr>
                  <tr className="table-row-hover">
                    <td className="py-3 px-4 text-muted font-medium hover-cell">Free Tier</td>
                    {top3.map((t) => (
                      <td key={t.slug} className="py-3 px-4 hover-cell">
                        {t.freeTier ? (
                          <span className="text-success font-medium">Yes</span>
                        ) : (
                          <span className="text-danger font-medium">No</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-surface-alt/50 table-row-hover">
                    <td className="py-3 px-4 text-muted font-medium hover-cell">Best For</td>
                    {top3.map((t) => (
                      <td key={t.slug} className="py-3 px-4 text-xs text-muted hover-cell">
                        {t.bestFor[0] ?? "General use"}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Tool Grid (sorted by score) */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">All {cat.name} Tools</h2>
            <Link
              href={`/best/${cat.slug}`}
              className="text-xs font-semibold text-accent hover:underline"
            >
              See ranked list &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sorted.map((tool) => (
              <div
                key={tool.slug}
                className="border border-border rounded-xl p-5 bg-background hover:border-accent/30 transition-all hover-glow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base font-bold">{tool.name}</h3>
                      {tool.badge && (
                        <span className="text-[10px] font-semibold text-accent bg-accent-light px-2 py-0.5 rounded-full">
                          {tool.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted mt-0.5">{tool.vendor}</p>
                  </div>
                  <div className="text-right shrink-0 ml-2">
                    <p className="text-xl font-extrabold text-accent">{tool.overall}</p>
                    <p className="text-[10px] text-muted">/ 10</p>
                  </div>
                </div>

                <p className="text-xs text-muted mb-3 line-clamp-2">{tool.tagline}</p>

                <div className="space-y-1.5 mb-3">
                  <ScoreBar label="Value" value={tool.scores.value} />
                  <ScoreBar label="Ease" value={tool.scores.ease} />
                  <ScoreBar label="Power" value={tool.scores.power} />
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs text-muted mb-4">
                  <span>{pricingSummary(tool)}</span>
                  {tool.bestFor[0] && (
                    <>
                      <span className="w-px h-3 bg-border" />
                      <span className="px-2 py-0.5 bg-surface-alt rounded-full text-[10px]">
                        {tool.bestFor[0]}
                      </span>
                    </>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  <a
                    href={tool.affiliateUrl}
                    rel="noopener noreferrer sponsored"
                    target="_blank"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-accent text-white hover:bg-accent/90 transition-colors"
                  >
                    Try {tool.name}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-lg border border-border text-muted hover:text-accent hover:border-accent/30 transition-colors"
                  >
                    Full review
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* "Best Of" Link */}
        <section className="text-center py-4">
          <Link
            href={`/best/${cat.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-colors text-sm"
          >
            See Full Ranked List: Best {cat.name} Tools
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </section>

        {/* Related Categories */}
        {relatedCategories.length > 0 && (
          <section>
            <h2 className="text-xl font-bold mb-4">Related Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedCategories.map((rc) => {
                const rcToolCount = getToolsByCategory(rc.slug).length;
                return (
                  <Link
                    key={rc.slug}
                    href={`/category/${rc.slug}`}
                    className="group border border-border rounded-xl p-5 hover:border-accent/30 transition-all bg-background"
                  >
                    <h3 className="text-sm font-bold group-hover:text-accent transition-colors">
                      {rc.name}
                    </h3>
                    <p className="text-xs text-muted mt-1 line-clamp-2">{rc.description}</p>
                    <p className="text-xs text-muted mt-2">{rcToolCount} tools</p>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
