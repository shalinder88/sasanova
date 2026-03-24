import type { Metadata } from "next";
import Link from "next/link";
import { tools, versusPairs, getOverallScore } from "@/data/tools";

export const metadata: Metadata = {
  title: "Compare Software Tools",
  description:
    "Side-by-side comparisons of popular software tools. Honest scoring, normalized pricing, and evidence-backed verdicts to help you pick the right tool.",
  openGraph: {
    title: "Compare Software Tools | Sasanova",
    description:
      "Side-by-side comparisons of popular software tools with honest scoring and normalized pricing.",
  },
};

function VerdictBadge({ verdict, nameA, nameB }: { verdict: string; nameA: string; nameB: string }) {
  if (verdict === "depends") {
    return (
      <span className="inline-block text-[10px] font-semibold bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full">
        Different jobs
      </span>
    );
  }
  const winnerName = tools.find(t => t.slug === verdict)?.name;
  const loserName = verdict === nameA ? nameB : nameA;
  return (
    <span className="inline-block text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full">
      {winnerName ?? verdict} for most users
    </span>
  );
}

export default function ComparePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
            Head-to-Head Comparisons
          </p>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3">
            Compare Software Tools
          </h1>
          <p className="text-base text-muted max-w-2xl leading-relaxed">
            Evidence-backed, side-by-side comparisons with multi-axis scoring, normalized pricing,
            and clear verdicts. No fluff, no hidden agendas.
          </p>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {versusPairs.map((vs) => {
              const toolA = tools.find((t) => t.slug === vs.slugA);
              const toolB = tools.find((t) => t.slug === vs.slugB);
              if (!toolA || !toolB) return null;

              const scoreA = getOverallScore(toolA.scores);
              const scoreB = getOverallScore(toolB.scores);

              return (
                <Link
                  key={`${vs.slugA}-vs-${vs.slugB}`}
                  href={`/compare/${vs.slugA}-vs-${vs.slugB}`}
                  className="group border border-border rounded-xl p-5 hover:border-accent/30 hover:shadow-sm transition-all bg-background hover-glow"
                >
                  {/* Tool names and scores */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold truncate">{toolA.name}</p>
                      <p className="text-xs text-muted">{toolA.vendor}</p>
                    </div>
                    <div className="flex flex-col items-center px-3 shrink-0">
                      <span className="text-[10px] font-semibold text-muted uppercase tracking-wider">vs</span>
                    </div>
                    <div className="flex-1 min-w-0 text-right">
                      <p className="text-sm font-bold truncate">{toolB.name}</p>
                      <p className="text-xs text-muted">{toolB.vendor}</p>
                    </div>
                  </div>

                  {/* Scores side by side */}
                  <div className="flex items-center justify-between mb-3 px-1">
                    <div className="text-center">
                      <p className="text-2xl font-extrabold text-accent">{scoreA}</p>
                      <p className="text-[10px] text-muted">/ 10</p>
                    </div>
                    <div className="flex-1 mx-4 h-px bg-border" />
                    <div className="text-center">
                      <p className="text-2xl font-extrabold text-accent">{scoreB}</p>
                      <p className="text-[10px] text-muted">/ 10</p>
                    </div>
                  </div>

                  {/* Verdict */}
                  <div className="flex items-center justify-between">
                    <VerdictBadge verdict={vs.verdict} nameA={toolA.name} nameB={toolB.name} />
                    <svg
                      className="w-4 h-4 text-muted group-hover:text-accent shrink-0 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-muted mt-2 line-clamp-2">{vs.summary}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
