export default function ScoreBar({ label, value, max = 10 }: { label: string; value: number; max?: number }) {
  const pct = (value / max) * 100;
  const color = value >= 8 ? "bg-success" : value >= 5 ? "bg-accent" : "bg-warning";

  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="w-24 text-muted truncate">{label}</span>
      <div className="flex-1 h-1.5 bg-surface-alt rounded-full overflow-hidden">
        <div className={`h-full rounded-full animate-fill ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="w-6 text-right font-mono font-medium">{value}</span>
    </div>
  );
}
