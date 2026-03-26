"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import { isProUser } from "@/lib/pro";

interface ProGateProps {
  /** Content shown to Pro users (or if no gate needed) */
  children: ReactNode;
  /** Teaser content shown to free users above the CTA. Optional — if omitted, children are shown with an overlay. */
  teaser?: ReactNode;
  /** Short description of what Pro unlocks for this feature */
  feature: string;
  /** Optional custom CTA label (default: "Upgrade to Pro") */
  ctaLabel?: string;
  /** If true, always show children but append the upsell below */
  inline?: boolean;
}

/**
 * Soft paywall component.
 * - Pro users see children unmodified.
 * - Free users see a teaser + "Upgrade to Pro" CTA.
 * - Never fully blocks — always shows SOME value, then upsells.
 */
export default function ProGate({
  children,
  teaser,
  feature,
  ctaLabel = "Upgrade to Pro",
  inline = false,
}: ProGateProps) {
  const isPro = isProUser();

  if (isPro) {
    return <>{children}</>;
  }

  // Inline mode: show children, then append upsell nudge below
  if (inline) {
    return (
      <>
        {children}
        <ProNudge feature={feature} ctaLabel={ctaLabel} />
      </>
    );
  }

  // Gated mode: show teaser (or nothing), then CTA
  return (
    <div className="relative">
      {teaser && <div className="opacity-60 pointer-events-none select-none">{teaser}</div>}
      <ProNudge feature={feature} ctaLabel={ctaLabel} />
    </div>
  );
}

/** Compact upsell nudge shown inside feature areas */
export function ProNudge({
  feature,
  ctaLabel = "Upgrade to Pro",
}: {
  feature: string;
  ctaLabel?: string;
}) {
  return (
    <div className="mt-4 rounded-xl border border-accent/30 bg-accent-light p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
      <div className="flex items-center gap-2 text-accent">
        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <span className="text-sm font-medium text-foreground">{feature}</span>
      </div>
      <Link
        href="/pro"
        className="inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-semibold bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors whitespace-nowrap"
      >
        {ctaLabel}
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}

/** Minimal inline badge for Pro-only labels in UI */
export function ProBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-accent/20 text-accent rounded ${className}`}
    >
      Pro
    </span>
  );
}
