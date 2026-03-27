"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useShortlist } from "./ShortlistProvider";
import { tools } from "@/data/tools";

const DISMISSED_KEY = "sasanova_compare_drawer_dismissed";

export default function CompareDrawer() {
  const { shortlist, removeFromShortlist, clearShortlist } = useShortlist();
  const router = useRouter();
  const [dismissed, setDismissed] = useState(false);

  // Hydrate dismissed state from sessionStorage on mount
  useEffect(() => {
    try {
      setDismissed(sessionStorage.getItem(DISMISSED_KEY) === "1");
    } catch {
      // sessionStorage unavailable in private browsing
    }
  }, []);

  // Re-show drawer when shortlist changes (user added a new tool after closing)
  useEffect(() => {
    if (shortlist.length >= 2) {
      try {
        sessionStorage.removeItem(DISMISSED_KEY);
      } catch { /* ignore */ }
      setDismissed(false);
    }
  }, [shortlist.length]);

  function dismiss() {
    try {
      sessionStorage.setItem(DISMISSED_KEY, "1");
    } catch { /* ignore */ }
    setDismissed(true);
  }

  const visible = shortlist.length >= 2 && !dismissed;

  function handleCompare() {
    router.push("/compare/shortlist");
  }

  if (!visible) return null;

  const shortlistedTools = shortlist
    .map((slug) => tools.find((t) => t.slug === slug))
    .filter(Boolean);

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-50 animate-slide-up"
      role="region"
      aria-label="Compare tools drawer"
    >
      <div className="bg-surface border-t border-border shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-3">
            {/* Tool chips */}
            <div className="flex-1 flex items-center gap-2 overflow-x-auto min-w-0">
              {shortlistedTools.map((tool) =>
                tool ? (
                  <span
                    key={tool.slug}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent-light text-accent text-xs font-medium rounded-full shrink-0"
                  >
                    {tool.name}
                    <button
                      onClick={() => removeFromShortlist(tool.slug)}
                      className="hover:text-accent-dark transition-colors"
                      aria-label={`Remove ${tool.name}`}
                    >
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </span>
                ) : null,
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleCompare}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent text-white text-xs font-semibold rounded-lg hover:bg-accent-dark transition-colors"
              >
                Compare {shortlist.length} tools
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
              <button
                onClick={dismiss}
                className="p-1.5 text-muted hover:text-foreground transition-colors"
                aria-label="Dismiss compare drawer"
                title="Dismiss (shortlist saved)"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
