export default function ScoreBar({ label, value, max = 10 }: { label: string; value: number; max?: number }) {
  const pct = (value / max) * 100;
  const color = value >= 8 ? "bg-success" : value >= 5 ? "bg-accent" : "bg-warning";
  const hoverColor = value >= 8 ? "text-success" : value >= 5 ? "text-accent" : "text-warning";

  return (
    <div className="hover-score-row flex items-center gap-2 text-xs group">
      <span className="w-24 text-muted truncate group-hover:text-foreground transition-colors">{label}</span>
      <div className="flex-1 h-1.5 bg-surface-alt rounded-full overflow-hidden group-hover:h-2.5 transition-all">
        <div className={`h-full rounded-full animate-fill ${color} transition-all`} style={{ width: `${pct}%` }} />
      </div>
      <span className={`w-6 text-right font-mono font-medium group-hover:${hoverColor} group-hover:text-sm transition-all`}>{value}</span>
    </div>
  );
}
