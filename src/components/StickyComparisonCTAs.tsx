"use client";

import { useEffect, useState } from "react";

interface StickyTool {
  name: string;
  slug: string;
  affiliateUrl: string;
}

interface StickyComparisonCTAsProps {
  tools: StickyTool[];
}

function ExternalLinkIcon() {
  return (
    <svg
      className="w-3 h-3 shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

function CtaButton({ tool }: { tool: StickyTool }) {
  return (
    <a
      href={tool.affiliateUrl}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="group flex items-center gap-1.5 rounded-full bg-surface/90 backdrop-blur border border-border px-3 py-1.5 text-xs text-muted transition-all duration-200 hover:border-accent hover:text-foreground hover:scale-105 shadow-sm"
    >
      <span>Try {tool.name}</span>
      <ExternalLinkIcon />
    </a>
  );
}

export default function StickyComparisonCTAs({ tools }: StickyComparisonCTAsProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY >= 600);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (tools.length === 0 || !visible) return null;

  const isTwoTools = tools.length === 2;

  if (isTwoTools) {
    return (
      <div className="hidden lg:block pointer-events-none fixed inset-0 z-40">
        {/* Left side — Tool A */}
        <div className="pointer-events-auto fixed left-3 top-1/2 -translate-y-1/2">
          <CtaButton tool={tools[0]} />
        </div>

        {/* Right side — Tool B */}
        <div className="pointer-events-auto fixed right-3 top-1/2 -translate-y-1/2">
          <CtaButton tool={tools[1]} />
        </div>
      </div>
    );
  }

  // 3+ tools: stack on the right side
  return (
    <div className="hidden lg:flex fixed right-3 top-1/2 -translate-y-1/2 z-40 flex-col gap-2">
      {tools.map((tool) => (
        <CtaButton key={tool.slug} tool={tool} />
      ))}
    </div>
  );
}
