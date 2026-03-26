import Link from "next/link";

interface RelatedLinksProps {
  tools?: string[];
  comparisons?: string[];
  guides?: string[];
}

const FRANCHISE_LABELS: Record<string, string> = {
  "franchise/anti-recommendations": "Who Should NOT Use Series",
  "franchise/hidden-costs": "Hidden Costs & Pricing Reality Series",
  "franchise/cost-thresholds": "When Tools Get Expensive Series",
  "franchise/decision-frameworks": "Decision Frameworks & 5-Minute Guides",
  "franchise/migration-guides": "Migration & Switching Guides",
};

function slugToLabel(slug: string): string {
  if (FRANCHISE_LABELS[slug]) return FRANCHISE_LABELS[slug];
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function comparisonToLabel(pair: string): string {
  const parts = pair.split("-vs-");
  if (parts.length === 2) {
    return `${slugToLabel(parts[0])} vs ${slugToLabel(parts[1])}`;
  }
  return slugToLabel(pair);
}

export default function RelatedLinks({
  tools,
  comparisons,
  guides,
}: RelatedLinksProps) {
  const hasContent =
    (tools && tools.length > 0) ||
    (comparisons && comparisons.length > 0) ||
    (guides && guides.length > 0);

  if (!hasContent) return null;

  return (
    <section className="border-t border-border pt-8 mt-8">
      <h2 className="text-xl font-bold text-foreground mb-4">
        Explore Further on Sasanova
      </h2>

      {tools && tools.length > 0 && (
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
            Tools
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((slug) => (
              <Link
                key={slug}
                href={`/tools/${slug}`}
                className="inline-block text-sm font-medium bg-surface border border-border text-accent rounded-full px-3 py-1 hover:border-accent/40 transition-colors"
              >
                {slugToLabel(slug)}
              </Link>
            ))}
          </div>
        </div>
      )}

      {comparisons && comparisons.length > 0 && (
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
            Comparisons
          </p>
          <div className="flex flex-wrap gap-2">
            {comparisons.map((pair) => (
              <Link
                key={pair}
                href={`/compare/${pair}`}
                className="inline-block text-sm font-medium bg-surface border border-border text-accent rounded-full px-3 py-1 hover:border-accent/40 transition-colors"
              >
                {comparisonToLabel(pair)}
              </Link>
            ))}
          </div>
        </div>
      )}

      {guides && guides.length > 0 && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
            Guides
          </p>
          <div className="flex flex-wrap gap-2">
            {guides.map((slug) => (
              <Link
                key={slug}
                href={`/guides/${slug}`}
                className="inline-block text-sm font-medium bg-surface border border-border text-accent rounded-full px-3 py-1 hover:border-accent/40 transition-colors"
              >
                {slugToLabel(slug)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
