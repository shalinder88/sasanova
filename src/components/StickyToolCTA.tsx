"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface StickyToolCTAProps {
  toolName: string;
  affiliateUrl: string;
  slug: string;
  freeTier: boolean;
}

export default function StickyToolCTA({ toolName, affiliateUrl, slug, freeTier }: StickyToolCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero area (~400px)
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-2 animate-fade-in">
      <div className="bg-surface border border-border rounded-xl p-3 shadow-lg shadow-black/20 max-w-[160px]">
        <p className="text-xs font-bold text-foreground mb-1 truncate">{toolName}</p>
        <a
          href={affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="block w-full text-center py-2 px-3 text-xs font-semibold bg-accent text-white rounded-lg hover:brightness-110 transition-all mb-1.5"
        >
          {freeTier ? "Try Free" : "Visit Site"}
        </a>
        <div className="flex gap-1.5">
          <Link
            href={`/pricing/${slug}`}
            className="flex-1 text-center py-1.5 text-[10px] font-medium border border-border rounded-md text-muted hover:text-foreground hover:border-accent/30 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href={`/alternatives/${slug}`}
            className="flex-1 text-center py-1.5 text-[10px] font-medium border border-border rounded-md text-muted hover:text-foreground hover:border-accent/30 transition-colors"
          >
            Alts
          </Link>
        </div>
        <p className="text-[8px] text-muted/50 mt-1.5 text-center">
          <Link href="/disclosure" className="hover:text-accent">Affiliate link</Link>
        </p>
      </div>
    </div>
  );
}
