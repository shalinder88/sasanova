import Link from "next/link";
import type { Metadata } from "next";
import { categories, getToolsByCategory } from "@/data/tools";
import { breadcrumbJsonLd, canonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Software Categories — Browse All Tools by Category",
  description:
    "Browse all software categories on Sasanova. Find and compare tools across email marketing, CRM, automation, project management, and more.",
  alternates: { canonical: canonicalUrl("/category") },
};

export default function CategoryHubPage() {
  // Only show categories with 2+ tools
  const visibleCategories = categories.filter(
    (cat) => getToolsByCategory(cat.slug).length >= 2
  );

  // Group by cluster
  const clusters = new Map<number, typeof visibleCategories>();
  for (const cat of visibleCategories) {
    const list = clusters.get(cat.cluster) ?? [];
    list.push(cat);
    clusters.set(cat.cluster, list);
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Software Categories",
    description:
      "Browse all software categories on Sasanova. Find and compare tools by category.",
    url: "https://sasanova.com/category",
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
            <li className="text-foreground font-medium">Categories</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
            Software Categories
          </h1>
          <p className="text-base text-muted max-w-3xl leading-relaxed">
            Browse {visibleCategories.length} software categories. Each category page includes
            scored reviews, pricing comparisons, and ranked recommendations.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleCategories.map((cat) => {
            const toolCount = getToolsByCategory(cat.slug).length;
            return (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="group border border-border rounded-xl p-5 hover:border-accent/30 transition-all bg-background"
              >
                <div className="flex items-start justify-between mb-2">
                  <h2 className="text-base font-bold group-hover:text-accent transition-colors">
                    {cat.name}
                  </h2>
                  <span className="text-xs text-muted bg-surface-alt px-2 py-0.5 rounded-full shrink-0 ml-2">
                    {toolCount} tools
                  </span>
                </div>
                <p className="text-xs text-muted leading-relaxed line-clamp-2">
                  {cat.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
