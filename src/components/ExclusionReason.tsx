"use client";

import { useState } from "react";

const reasonLabels: Record<string, string> = {
  too_expensive: "Pricing above category average",
  weak_portability: "Limited data export options",
  narrow_fit: "Too specialized for this category",
  poor_onboarding: "High setup friction",
  weak_support: "Below-average support quality",
  insufficient_evidence: "Not enough verified data yet",
};

export default function ExclusionReason({
  reasons,
}: {
  reasons: { toolName: string; reasonCode: string; explanation: string }[];
}) {
  const [open, setOpen] = useState(false);

  if (!reasons.length) return null;

  return (
    <div className="border border-border rounded-lg bg-surface">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-3.5 py-2.5 text-left"
        aria-expanded={open}
      >
        <span className="text-xs font-medium text-muted">
          Why some tools aren&apos;t listed
        </span>
        <svg
          className={`w-4 h-4 text-muted transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="px-3.5 pb-3 space-y-2.5 border-t border-border pt-2.5">
          {reasons.map((r) => (
            <div key={r.toolName} className="flex items-start gap-2">
              <svg className="w-3.5 h-3.5 text-muted shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="min-w-0">
                <p className="text-xs font-medium text-foreground">
                  {r.toolName}{" "}
                  <span className="font-normal text-muted">
                    &mdash; {reasonLabels[r.reasonCode] ?? r.reasonCode}
                  </span>
                </p>
                <p className="text-[11px] text-muted leading-relaxed mt-0.5">{r.explanation}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
