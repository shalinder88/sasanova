"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { tools } from "@/data/tools";

const WATCHLIST_KEY = "sasanova_price_watchlist";
const WATCHLIST_META_KEY = "sasanova_price_watchlist_meta";

interface WatchlistMeta {
  [slug: string]: { addedAt: string };
}

function getWatchlist(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(WATCHLIST_KEY) || "[]");
  } catch {
    return [];
  }
}

function getWatchlistMeta(): WatchlistMeta {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(WATCHLIST_META_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveWatchlist(slugs: string[]) {
  localStorage.setItem(WATCHLIST_KEY, JSON.stringify(slugs));
}

function getToolName(slug: string): string {
  return tools.find((t) => t.slug === slug)?.name ?? slug;
}

function getToolVendor(slug: string): string {
  return tools.find((t) => t.slug === slug)?.vendor ?? "";
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

export default function ManageAlertsPage() {
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const [meta, setMeta] = useState<WatchlistMeta>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setWatchlist(getWatchlist());
    setMeta(getWatchlistMeta());
    setMounted(true);
  }, []);

  function removeTool(slug: string) {
    const updated = watchlist.filter((s) => s !== slug);
    setWatchlist(updated);
    saveWatchlist(updated);
  }

  if (!mounted) {
    return (
      <main className="max-w-2xl mx-auto px-4 py-16">
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-48 bg-surface rounded" />
          <div className="h-4 w-64 bg-surface rounded" />
          <div className="space-y-3 mt-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-16 bg-surface rounded-lg" />
            ))}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-20">
      <div className="mb-8">
        <Link
          href="/alerts"
          className="inline-flex items-center gap-1 text-sm text-muted hover:text-accent transition-colors mb-4"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Alerts
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">Your Watchlist</h1>
        <p className="text-muted mt-1">
          {watchlist.length > 0
            ? `You're watching ${watchlist.length} tool${watchlist.length !== 1 ? "s" : ""} for pricing changes.`
            : "You're not watching any tools yet."}
        </p>
      </div>

      {watchlist.length === 0 ? (
        <div className="border border-border rounded-xl p-8 text-center bg-surface">
          <div className="mx-auto w-12 h-12 rounded-full bg-surface-alt flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-muted" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold mb-2">No tools on your watchlist</h2>
          <p className="text-sm text-muted mb-6">
            Add tools to get notified when their pricing changes.
          </p>
          <Link
            href="/alerts"
            className="inline-flex px-5 py-2.5 text-sm font-semibold bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors"
          >
            Add Tools to Watch
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-3">
            {watchlist.map((slug) => {
              const addedAt = meta[slug]?.addedAt;
              return (
                <div
                  key={slug}
                  className="flex items-center justify-between p-4 border border-border rounded-lg bg-surface hover:bg-surface-alt transition-colors"
                >
                  <div className="min-w-0">
                    <Link
                      href={`/tools/${slug}`}
                      className="text-sm font-medium hover:text-accent transition-colors"
                    >
                      {getToolName(slug)}
                    </Link>
                    <div className="flex items-center gap-3 mt-0.5">
                      {getToolVendor(slug) && (
                        <span className="text-xs text-muted">
                          {getToolVendor(slug)}
                        </span>
                      )}
                      {addedAt && (
                        <span className="text-xs text-muted">
                          Added {formatDate(addedAt)}
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => removeTool(slug)}
                    className="shrink-0 ml-4 px-3 py-1.5 text-xs font-medium text-danger bg-danger-light border border-danger/20 rounded-md hover:bg-danger/20 transition-colors"
                    aria-label={`Remove ${getToolName(slug)}`}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/alerts"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Add More Tools
            </Link>
          </div>
        </>
      )}
    </main>
  );
}
