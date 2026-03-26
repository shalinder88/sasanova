import type { Tool } from "@/data/tools";

export type ConfidenceLevel = "high" | "medium" | "low";

/**
 * Compute a confidence level for how reliable our recommendation data is.
 *
 * High:   independently verified pricing + all plans have priceMonthly + at least 2 alternatives
 * Medium: vendor-claimed OR some plans null OR fewer than 2 alternatives
 * Low:    most plans custom/null OR no alternatives at all
 */
export function getConfidenceLevel(tool: Tool): ConfidenceLevel {
  const verifiedPricing = tool.provenanceLevel === "independently_verified";
  const allPlansHavePrice = tool.pricing.every((p) => p.priceMonthly !== null);
  const hasAlternatives = tool.alternatives.length >= 2;

  if (verifiedPricing && allPlansHavePrice && hasAlternatives) return "high";
  if (!allPlansHavePrice || tool.alternatives.length < 1) return "low";
  return "medium";
}

const CONFIDENCE_CONFIG: Record<
  ConfidenceLevel,
  { label: string; color: string }
> = {
  high: {
    label: "High confidence \u2014 verified pricing",
    color: "text-success bg-success/10 border-success/30",
  },
  medium: {
    label: "Medium confidence \u2014 some data vendor-claimed",
    color: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
  },
  low: {
    label: "Low confidence \u2014 limited pricing data",
    color: "text-red-400 bg-red-400/10 border-red-400/30",
  },
};

export function ConfidenceBadge({ level }: { level: ConfidenceLevel }) {
  const config = CONFIDENCE_CONFIG[level];
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-semibold rounded-full border ${config.color}`}
    >
      {level === "high" && (
        <svg
          className="w-3 h-3"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      )}
      {config.label}
    </span>
  );
}
