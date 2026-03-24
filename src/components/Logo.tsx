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
      {/* Diamond prism shape — represents clarity in decision-making */}
      <rect width="32" height="32" rx="8" fill="url(#logo-gradient)" />
      {/* Prism / lens shape */}
      <path
        d="M16 6L24 16L16 26L8 16L16 6Z"
        fill="white"
        fillOpacity="0.95"
      />
      {/* Inner refraction line */}
      <path
        d="M16 6L20 16L16 26"
        fill="white"
        fillOpacity="0.6"
      />
      {/* Light beam accent */}
      <path
        d="M12 13L16 6L20 13"
        stroke="white"
        strokeWidth="0.5"
        strokeOpacity="0.4"
        fill="none"
      />
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="32" y2="32">
          <stop stopColor="#6366f1" />
          <stop offset="1" stopColor="#4338ca" />
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
