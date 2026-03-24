const failureMessages: Record<string, { icon: "info" | "warning"; template: string }> = {
  no_pricing: {
    icon: "info",
    template: "We haven't verified pricing for {tool} yet. Visit their pricing page directly.",
  },
  no_alternatives: {
    icon: "info",
    template: "We haven't completed our alternatives analysis for {tool} yet.",
  },
  no_verdict: {
    icon: "info",
    template: "Our editorial team hasn't published a verdict for {tool} yet.",
  },
  stale_data: {
    icon: "warning",
    template: "Some information on this page hasn't been reverified recently.",
  },
  incomplete: {
    icon: "warning",
    template: "This tool profile doesn't meet our minimum completeness threshold yet.",
  },
};

export default function FailureState({
  type,
  toolName,
}: {
  type: "no_pricing" | "no_alternatives" | "no_verdict" | "stale_data" | "incomplete";
  toolName?: string;
}) {
  const config = failureMessages[type];
  const message = config.template.replace("{tool}", toolName ?? "this tool");

  return (
    <div className="flex items-start gap-2.5 px-3.5 py-3 rounded-lg border border-border bg-surface">
      {config.icon === "warning" ? (
        <svg className="w-4 h-4 text-warning shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.168 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg className="w-4 h-4 text-muted shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
            clipRule="evenodd"
          />
        </svg>
      )}
      <p className="text-xs text-muted leading-relaxed">{message}</p>
    </div>
  );
}
