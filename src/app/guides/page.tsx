import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Software Guides & Workflows",
  description:
    "Practical guides for building SaaS stacks, automating workflows, and choosing the right tools. Written by the Sasanova editorial team.",
};

export default function GuidesHub() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
            Guides
          </p>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
            Software Guides &amp; Workflows
          </h1>
          <p className="text-muted max-w-2xl">
            Practical, tool-agnostic guides for building stacks, automating workflows, and making better software decisions.
          </p>
        </div>
      </section>

      {/* Franchise Hubs */}
      <section className="py-10 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold mb-1">Content Series</h2>
          <p className="text-sm text-muted mb-5">
            Curated collections of our most popular content formats.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                href: "/guides/franchise/anti-recommendations",
                title: "Who Should NOT Use",
                desc: "15 popular tools and who should skip them",
                count: "15 guides",
              },
              {
                href: "/guides/franchise/hidden-costs",
                title: "Hidden Costs",
                desc: "What SaaS pricing pages don't show",
                count: "13 guides",
              },
              {
                href: "/guides/franchise/decision-frameworks",
                title: "Decision Frameworks",
                desc: "Structured decision trees for every category",
                count: "10 guides",
              },
              {
                href: "/guides/franchise/cost-thresholds",
                title: "When Tools Get Expensive",
                desc: "The exact thresholds where pricing breaks",
                count: "14 guides",
              },
              {
                href: "/guides/franchise/migration-guides",
                title: "Migration & Switching",
                desc: "Step-by-step guides for switching tools",
                count: "24 guides",
              },
            ].map((hub) => (
              <Link
                key={hub.href}
                href={hub.href}
                className="group border border-border rounded-xl p-5 hover-glow hover:border-accent/30 transition-all bg-background"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1.5">
                  {hub.count}
                </p>
                <h3 className="text-base font-bold group-hover:text-accent transition-colors mb-1">
                  {hub.title}
                </h3>
                <p className="text-sm text-muted">{hub.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Guides */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold mb-5">All Guides</h2>
          <div className="grid grid-cols-1 gap-4">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group border border-border rounded-xl p-6 hover-glow hover:border-accent/30 transition-all bg-background"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent-light px-2 py-0.5 rounded-full">
                        {guide.category}
                      </span>
                      <span className="text-[11px] text-muted">{guide.readingTime}</span>
                    </div>
                    <h2 className="text-lg font-bold group-hover:text-accent transition-colors mb-1">
                      {guide.title}
                    </h2>
                    <p className="text-sm text-muted line-clamp-2">{guide.description}</p>
                  </div>
                  <svg
                    className="w-5 h-5 text-muted group-hover:text-accent shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
