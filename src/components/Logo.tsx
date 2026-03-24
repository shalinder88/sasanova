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
      <rect width="32" height="32" rx="8" fill="url(#sn-grad)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />

      {/* Outer orbit ring */}
      <ellipse cx="16" cy="16" rx="10" ry="10" stroke="white" strokeOpacity="0.25" strokeWidth="1" fill="none" />

      {/* Inner orbit ring — tilted (the "nova" orbit) */}
      <ellipse cx="16" cy="16" rx="10" ry="5" stroke="white" strokeOpacity="0.5" strokeWidth="1.2" fill="none" transform="rotate(-25 16 16)" />

      {/* Core — the bright center point */}
      <circle cx="16" cy="16" r="3" fill="white" fillOpacity="0.95" />
      <circle cx="16" cy="16" r="1.5" fill="url(#sn-grad)" />

      {/* Orbiting dot — top of outer ring */}
      <circle cx="16" cy="6" r="1.5" fill="white" fillOpacity="0.8" />

      {/* Orbiting dot — on inner ring */}
      <circle cx="23.5" cy="13" r="1" fill="#a5b4fc" fillOpacity="0.7" />

      <defs>
        <linearGradient id="sn-grad" x1="0" y1="0" x2="32" y2="32">
          <stop stopColor="#818cf8" />
          <stop offset="1" stopColor="#6366f1" />
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
