import { Suspense } from "react";
import Link from "next/link";
import { versusPairs, tools } from "@/data/tools";
import PlaygroundClient from "./playground-client";

export default function PlaygroundPage() {
  const popular = versusPairs.slice(0, 6).map((vs) => ({
    ...vs,
    toolA: tools.find((t) => t.slug === vs.slugA),
    toolB: tools.find((t) => t.slug === vs.slugB),
  })).filter((v) => v.toolA && v.toolB);

  return (
    <>
      {/* Server-rendered static HTML for SEO — visible before JS loads */}
      <noscript>
        <section className="border-b border-border bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
              Interactive Playground
            </p>
            <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
              Tool Comparison Playground
            </h1>
            <p className="text-base text-muted max-w-2xl leading-relaxed mb-8">
              Compare any 2-4 tools side by side. Select tools below to see scores, pricing, features,
              and more — all auto-generated from our verified data.
            </p>
            <h2 className="text-lg font-semibold text-foreground mb-4">Popular Comparisons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {popular.map((vs) => (
                <Link
                  key={`${vs.slugA}-${vs.slugB}`}
                  href={`/compare/${vs.slugA}-vs-${vs.slugB}`}
                  className="border border-border rounded-lg p-4 bg-surface hover:border-accent/40 transition-colors"
                >
                  <span className="text-sm font-semibold text-foreground">
                    {vs.toolA!.name} vs {vs.toolB!.name}
                  </span>
                  <p className="text-xs text-muted mt-1 line-clamp-2">{vs.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </noscript>

      {/* Client interactive playground */}
      <Suspense
        fallback={
          <section className="border-b border-border bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                Interactive Playground
              </p>
              <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
                Tool Comparison Playground
              </h1>
              <p className="text-base text-muted max-w-2xl leading-relaxed mb-8">
                Compare any 2-4 tools side by side. Select tools below to see scores, pricing, features,
                and more — all auto-generated from our verified data.
              </p>
              <h2 className="text-lg font-semibold text-foreground mb-4">Popular Comparisons</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {popular.map((vs) => (
                  <Link
                    key={`${vs.slugA}-${vs.slugB}`}
                    href={`/compare/${vs.slugA}-vs-${vs.slugB}`}
                    className="border border-border rounded-lg p-4 bg-surface hover:border-accent/40 transition-colors"
                  >
                    <span className="text-sm font-semibold text-foreground">
                      {vs.toolA!.name} vs {vs.toolB!.name}
                    </span>
                    <p className="text-xs text-muted mt-1 line-clamp-2">{vs.summary}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        }
      >
        <PlaygroundClient />
      </Suspense>
    </>
  );
}
