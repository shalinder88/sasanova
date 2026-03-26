"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const WATCHLIST_KEY = "sasanova_price_watchlist";
const WATCHLIST_META_KEY = "sasanova_price_watchlist_meta";

function getWatchlist(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(WATCHLIST_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveWatchlist(slugs: string[]) {
  localStorage.setItem(WATCHLIST_KEY, JSON.stringify(slugs));
}

function saveWatchlistMeta(slug: string) {
  try {
    const meta = JSON.parse(
      localStorage.getItem(WATCHLIST_META_KEY) || "{}"
    );
    meta[slug] = { addedAt: new Date().toISOString() };
    localStorage.setItem(WATCHLIST_META_KEY, JSON.stringify(meta));
  } catch {
    // ignore
  }
}

export default function WatchPriceButton({ slug, toolName }: { slug: string; toolName: string }) {
  const [watching, setWatching] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setWatching(getWatchlist().includes(slug));
    setMounted(true);
  }, [slug]);

  function handleClick() {
    if (watching) return;
    const list = getWatchlist();
    if (!list.includes(slug)) {
      list.push(slug);
      saveWatchlist(list);
      saveWatchlistMeta(slug);
    }
    setWatching(true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  }

  if (!mounted) return null;

  return (
    <div className="relative inline-block">
      {watching ? (
        <Link
          href="/alerts"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-accent bg-accent-light border border-accent/20 rounded-md hover:bg-accent-light/80 transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          Watching
        </Link>
      ) : (
        <button
          onClick={handleClick}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-muted bg-surface border border-border rounded-md hover:text-accent hover:border-accent/30 transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          Watch for price changes
        </button>
      )}

      {/* Toast notification */}
      {showToast && (
        <div className="absolute bottom-full left-0 mb-2 w-64 p-3 bg-surface border border-border rounded-lg shadow-lg animate-[fadeSlideUp_0.2s_ease-out] z-30">
          <p className="text-xs font-medium text-foreground">
            Added {toolName} to your watchlist
          </p>
          <p className="text-[11px] text-muted mt-0.5">
            <Link href="/alerts" className="text-accent hover:underline">
              Complete email signup
            </Link>{" "}
            to get notified.
          </p>
          <style jsx>{`
            @keyframes fadeSlideUp {
              from {
                opacity: 0;
                transform: translateY(4px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
