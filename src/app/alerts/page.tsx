"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { tools, categories } from "@/data/tools";
import { subscribeToAlerts } from "@/lib/alerts";
import { getLimit } from "@/lib/pro";
import { ProNudge } from "@/components/ProGate";

const WATCHLIST_KEY = "sasanova_price_watchlist";
const WATCHLIST_META_KEY = "sasanova_price_watchlist_meta";
const CATEGORY_WATCHLIST_KEY = "sasanova_category_watchlist";

/** Categories available for "Watch My Stack" */
const WATCHABLE_CATEGORIES = [
  { slug: "email-marketing", label: "Email Marketing" },
  { slug: "crm", label: "CRM" },
  { slug: "automation", label: "Automation" },
  { slug: "project-management", label: "Project Management" },
  { slug: "analytics", label: "Analytics" },
  { slug: "helpdesk-support", label: "Support" },
];

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

function getCategoryWatchlist(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(CATEGORY_WATCHLIST_KEY) || "[]");
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

function saveCategoryWatchlist(slugs: string[]) {
  localStorage.setItem(CATEGORY_WATCHLIST_KEY, JSON.stringify(slugs));
}

function saveWatchlistMeta(meta: WatchlistMeta) {
  localStorage.setItem(WATCHLIST_META_KEY, JSON.stringify(meta));
}

function getToolCountForCategory(categorySlug: string): number {
  return tools.filter(
    (t) =>
      t.categorySlug === categorySlug || t.categories.includes(categorySlug)
  ).length;
}

function getCategoryLabel(slug: string): string {
  return (
    WATCHABLE_CATEGORIES.find((c) => c.slug === slug)?.label ??
    categories.find((c) => c.slug === slug)?.name ??
    slug
  );
}

export default function AlertsPage() {
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const [categoryWatchlist, setCategoryWatchlist] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [search, setSearch] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successNames, setSuccessNames] = useState<string[]>([]);
  const [successCategories, setSuccessCategories] = useState<string[]>([]);
  const [emailError, setEmailError] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWatchlist(getWatchlist());
    setCategoryWatchlist(getCategoryWatchlist());
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const filteredTools = useMemo(() => {
    if (!search.trim()) return tools.slice(0, 20);
    const q = search.toLowerCase();
    return tools.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.vendor.toLowerCase().includes(q) ||
        t.slug.toLowerCase().includes(q)
    );
  }, [search]);

  const alertLimit = getLimit("alertTools");

  function addTool(slug: string) {
    if (watchlist.includes(slug)) return;
    if (watchlist.length >= alertLimit) return;
    const updated = [...watchlist, slug];
    setWatchlist(updated);
    saveWatchlist(updated);

    const meta = getWatchlistMeta();
    meta[slug] = { addedAt: new Date().toISOString() };
    saveWatchlistMeta(meta);

    setSearch("");
    setDropdownOpen(false);
  }

  function removeTool(slug: string) {
    const updated = watchlist.filter((s) => s !== slug);
    setWatchlist(updated);
    saveWatchlist(updated);
  }

  function toggleCategory(slug: string) {
    let updated: string[];
    if (categoryWatchlist.includes(slug)) {
      updated = categoryWatchlist.filter((s) => s !== slug);
    } else {
      updated = [...categoryWatchlist, slug];
    }
    setCategoryWatchlist(updated);
    saveCategoryWatchlist(updated);
  }

  function getToolName(slug: string): string {
    return tools.find((t) => t.slug === slug)?.name ?? slug;
  }

  const hasAnythingToWatch =
    watchlist.length > 0 || categoryWatchlist.length > 0;

  function validateEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  /** Collect all tool slugs covered by category watches (for Supabase) */
  function getAllWatchedToolSlugs(): string[] {
    const fromTools = new Set(watchlist);
    for (const catSlug of categoryWatchlist) {
      for (const t of tools) {
        if (
          t.categorySlug === catSlug ||
          t.categories.includes(catSlug)
        ) {
          fromTools.add(t.slug);
        }
      }
    }
    return Array.from(fromTools);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEmailError("");

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    if (!hasAnythingToWatch) {
      setEmailError("Add at least one tool or category to watch.");
      return;
    }

    setSubmitting(true);

    const allSlugs = getAllWatchedToolSlugs();

    // Try Supabase, gracefully degrade
    const saved = await subscribeToAlerts(email, allSlugs).catch(() => false);

    if (!saved) {
      // Graceful degradation: store locally
      try {
        localStorage.setItem(
          "sasanova_alert_email",
          JSON.stringify({
            email,
            toolSlugs: allSlugs,
            categorySlugs: categoryWatchlist,
            createdAt: new Date().toISOString(),
          })
        );
      } catch {
        // ignore
      }
    }

    setSuccessNames(watchlist.map(getToolName));
    setSuccessCategories(categoryWatchlist.map(getCategoryLabel));
    setSuccess(true);
    setSubmitting(false);
  }

  if (success) {
    return (
      <main className="max-w-2xl mx-auto px-4 py-16 sm:py-24">
        <div className="text-center">
          {/* Checkmark animation */}
          <div className="mx-auto w-16 h-16 rounded-full bg-success-light flex items-center justify-center mb-6 animate-[scaleIn_0.3s_ease-out]">
            <svg
              className="w-8 h-8 text-success"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
                className="animate-[drawCheck_0.4s_ease-out_0.2s_both]"
                style={{
                  strokeDasharray: 24,
                  strokeDashoffset: 24,
                  animation: "drawCheck 0.4s ease-out 0.2s forwards",
                }}
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-3">You&apos;re All Set</h1>
          <p className="text-muted mb-6">
            You&apos;ll get an email when pricing changes
            {successCategories.length > 0 && (
              <>
                {" "}
                in{" "}
                <span className="text-foreground font-medium">
                  {successCategories.join(", ")}
                </span>
              </>
            )}
            {successNames.length > 0 && (
              <>
                {successCategories.length > 0 ? " or for " : " for "}
                <span className="text-foreground font-medium">
                  {successNames.join(", ")}
                </span>
              </>
            )}
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/alerts/manage"
              className="px-5 py-2.5 text-sm font-semibold bg-surface border border-border rounded-lg hover:bg-surface-alt transition-colors"
            >
              Manage Watchlist
            </Link>
            <Link
              href="/tools"
              className="px-5 py-2.5 text-sm font-semibold bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors"
            >
              Browse More Tools
            </Link>
          </div>
        </div>

        <style jsx>{`
          @keyframes scaleIn {
            from { transform: scale(0); }
            to { transform: scale(1); }
          }
          @keyframes drawCheck {
            to { stroke-dashoffset: 0; }
          }
        `}</style>
      </main>
    );
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-12 sm:py-20">
      {/* Hero */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-light border border-accent/20 text-accent text-xs font-medium mb-4">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          Price Alerts
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Never Miss a Pricing Change
        </h1>
        <p className="text-muted text-lg max-w-lg mx-auto">
          Get notified when your tools raise prices, change plans, or reduce
          free tiers.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* ── Watch My Stack: Category Selection ── */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Watch My Stack
          </label>
          <p className="text-xs text-muted mb-3">
            Select categories to watch every tool in that space. Any pricing
            change in the category triggers an alert.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {WATCHABLE_CATEGORIES.map((cat) => {
              const isWatched = categoryWatchlist.includes(cat.slug);
              const toolCount = getToolCountForCategory(cat.slug);
              return (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => toggleCategory(cat.slug)}
                  className={`flex items-center gap-2 px-3 py-2.5 text-sm rounded-lg border transition-colors text-left ${
                    isWatched
                      ? "border-accent bg-accent-light text-accent font-medium"
                      : "border-border bg-surface hover:bg-surface-alt text-foreground"
                  }`}
                >
                  <span
                    className={`shrink-0 w-4 h-4 rounded border flex items-center justify-center ${
                      isWatched
                        ? "bg-accent border-accent"
                        : "border-border"
                    }`}
                  >
                    {isWatched && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </span>
                  <span className="truncate">
                    {cat.label}
                    <span className="text-muted text-xs ml-1">
                      ({toolCount})
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category watch summary */}
        {categoryWatchlist.length > 0 && (
          <div className="rounded-lg border border-accent/20 bg-accent-light/50 px-4 py-3">
            <p className="text-sm text-foreground">
              <span className="font-medium">You&apos;re watching:</span>{" "}
              {categoryWatchlist.map((slug, i) => (
                <span key={slug}>
                  {i > 0 && ", "}
                  {getCategoryLabel(slug)} ({getToolCountForCategory(slug)}{" "}
                  tools)
                </span>
              ))}
            </p>
          </div>
        )}

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 border-t border-border" />
          <span className="text-xs text-muted font-medium">
            Or watch specific tools
          </span>
          <div className="flex-1 border-t border-border" />
        </div>

        {/* Tool Search / Select */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Select individual tools to watch
          </label>
          <div className="relative" ref={dropdownRef}>
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search tools (e.g., Mailchimp, Zapier, Notion)..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setDropdownOpen(true);
                }}
                onFocus={() => setDropdownOpen(true)}
                className="w-full pl-10 pr-4 py-3 text-sm border border-border rounded-lg bg-background focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none"
              />
            </div>

            {dropdownOpen && filteredTools.length > 0 && (
              <div className="absolute z-20 mt-1 w-full max-h-60 overflow-y-auto border border-border rounded-lg bg-surface shadow-lg">
                {filteredTools.map((t) => {
                  const isWatched = watchlist.includes(t.slug);
                  return (
                    <button
                      key={t.slug}
                      type="button"
                      onClick={() => addTool(t.slug)}
                      disabled={isWatched}
                      className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between transition-colors ${
                        isWatched
                          ? "text-muted cursor-default bg-surface-alt/50"
                          : "hover:bg-surface-alt cursor-pointer"
                      }`}
                    >
                      <span>
                        <span className="font-medium">{t.name}</span>
                        <span className="text-muted ml-2 text-xs">
                          {t.vendor}
                        </span>
                      </span>
                      {isWatched && (
                        <span className="text-xs text-accent">Watching</span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Watched Tools Chips */}
        {watchlist.length > 0 && (
          <div>
            <label className="block text-sm font-medium mb-2">
              Watching {watchlist.length} tool
              {watchlist.length !== 1 ? "s" : ""}
            </label>
            <div className="flex flex-wrap gap-2">
              {watchlist.map((slug) => (
                <span
                  key={slug}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium bg-accent-light text-accent border border-accent/20 rounded-full"
                >
                  {getToolName(slug)}
                  <button
                    type="button"
                    onClick={() => removeTool(slug)}
                    className="hover:text-foreground transition-colors"
                    aria-label={`Remove ${getToolName(slug)}`}
                  >
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </span>
              ))}
            </div>
            {watchlist.length >= alertLimit && alertLimit !== Infinity && (
              <ProNudge feature="Watch unlimited tools with Pro" />
            )}
          </div>
        )}

        {/* Email Input */}
        <div>
          <label htmlFor="alert-email" className="block text-sm font-medium mb-2">
            Your email
          </label>
          <input
            id="alert-email"
            type="email"
            required
            placeholder="you@company.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (emailError) setEmailError("");
            }}
            className="w-full px-4 py-3 text-sm border border-border rounded-lg bg-background focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none"
          />
          {emailError && (
            <p className="mt-1.5 text-xs text-danger">{emailError}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting || !hasAnythingToWatch}
          className="w-full py-3 text-sm font-semibold bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <span className="inline-flex items-center gap-2">
              <svg
                className="w-4 h-4 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Saving...
            </span>
          ) : (
            "Watch My Stack"
          )}
        </button>

        <p className="text-center text-[11px] text-muted">
          We only email when pricing actually changes. No spam, no marketing.{" "}
          <Link href="/privacy" className="text-accent hover:underline">
            Privacy Policy
          </Link>
        </p>
      </form>

      {/* Already watching? */}
      <div className="mt-10 pt-6 border-t border-border text-center">
        <p className="text-sm text-muted">
          Already watching tools?{" "}
          <Link
            href="/alerts/manage"
            className="text-accent hover:underline font-medium"
          >
            Manage your watchlist
          </Link>
        </p>
      </div>
    </main>
  );
}
