import Link from "next/link";
import type { Metadata } from "next";
import { tools, getOverallScore } from "@/data/tools";

export const metadata: Metadata = {
  title: "Software Alternatives",
  description:
    "Find the best alternatives to popular software tools. Compare features, pricing, and scores side by side.",
};

// Only show tools that have alternatives defined
const toolsWithAlternatives = tools
  .filter((t) => t.alternatives.length > 0)
  .sort((a, b) => getOverallScore(b.scores) - getOverallScore(a.scores));

export default function AlternativesHub() {
  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">Alternatives</p>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
            Software Alternatives
          </h1>
          <p className="text-base text-muted max-w-2xl leading-relaxed">
            Thinking about switching? Compare alternatives to {toolsWithAlternatives.length} popular
            tools with honest scores, pricing breakdowns, and switching guides.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {toolsWithAlternatives.map((tool) => (
              <Link
                key={tool.slug}
                href={`/alternatives/${tool.slug}`}
                className="group flex items-center justify-between gap-3 p-5 border border-border rounded-xl bg-background hover:border-accent/30 hover:bg-accent-light/50 transition-all"
              >
                <div className="min-w-0">
                  <h2 className="text-base font-bold group-hover:text-accent transition-colors">
                    {tool.name} Alternatives
                  </h2>
                  <p className="text-xs text-muted mt-1">
                    {tool.alternatives.length} alternative{tool.alternatives.length !== 1 ? "s" : ""} compared
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-lg font-extrabold text-accent">{getOverallScore(tool.scores)}</p>
                  <p className="text-[10px] text-muted">/ 10</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
