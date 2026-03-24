import Link from "next/link";

const bands = [
  {
    min: 75,
    bg: "bg-danger-light",
    border: "border-danger/20",
    textColor: "text-danger",
    icon: "warning",
    message: "Warning: This page has not been verified recently. Data may be inaccurate.",
  },
  {
    min: 50,
    bg: "bg-warning-light",
    border: "border-warning/20",
    textColor: "text-warning",
    icon: "warning",
    message: "Some data on this page may be outdated. Re-verification in progress.",
  },
  {
    min: 25,
    bg: "bg-warning-light/60",
    border: "border-warning/10",
    textColor: "text-warning",
    icon: "info",
    message: "This page is due for re-verification.",
  },
] as const;

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function StalenessWarning({
  lastVerifiedAt,
  stalenessScore,
}: {
  lastVerifiedAt: string;
  stalenessScore: number;
}) {
  const band = bands.find((b) => stalenessScore >= b.min);
  if (!band) return null;

  return (
    <div
      className={`flex items-start gap-2.5 px-3.5 py-2.5 rounded-lg border ${band.bg} ${band.border}`}
      role="alert"
    >
      {band.icon === "warning" ? (
        <svg className={`w-4 h-4 ${band.textColor} shrink-0 mt-0.5`} fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.168 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg className={`w-4 h-4 ${band.textColor} shrink-0 mt-0.5`} fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
            clipRule="evenodd"
          />
        </svg>
      )}
      <div className="flex-1 min-w-0">
        <p className={`text-xs font-medium ${band.textColor}`}>{band.message}</p>
        <p className="text-[11px] text-muted mt-0.5">
          Last verified: {formatDate(lastVerifiedAt)}.{" "}
          <Link href="/about/methodology" className="text-accent hover:underline">
            Learn about our methodology
          </Link>
        </p>
      </div>
    </div>
  );
}
