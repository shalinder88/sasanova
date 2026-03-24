export function LogoIcon({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Rounded square base */}
      <rect width="32" height="32" rx="8" fill="url(#sasanova-grad)" />
      {/* Two overlapping rounded rectangles — represents comparison/decision */}
      <rect x="7" y="8" width="12" height="16" rx="3" fill="white" fillOpacity="0.9" />
      <rect x="13" y="8" width="12" height="16" rx="3" fill="white" fillOpacity="0.55" />
      {/* Center line — the decision point */}
      <line x1="16" y1="11" x2="16" y2="21" stroke="url(#sasanova-grad)" strokeWidth="1.5" strokeLinecap="round" />
      <defs>
        <linearGradient id="sasanova-grad" x1="0" y1="0" x2="32" y2="32">
          <stop stopColor="#6366f1" />
          <stop offset="1" stopColor="#4f46e5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function LogoFull({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <LogoIcon />
      <span className="text-lg font-bold tracking-tight">
        Sasa<span className="text-accent">nova</span>
      </span>
    </span>
  );
}
