"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { tools, type Tool } from "@/data/tools";

export default function SearchBar({ variant = "header" }: { variant?: "header" | "page" }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<Tool[]>([]);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Cmd+K / Ctrl+K to focus
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Escape") {
        setOpen(false);
        inputRef.current?.blur();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Click outside to close
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const updateSuggestions = useCallback((q: string) => {
    if (q.trim().length === 0) {
      setSuggestions([]);
      setOpen(false);
      return;
    }
    const lower = q.toLowerCase();
    const matches = tools
      .filter(
        (t) =>
          t.name.toLowerCase().includes(lower) ||
          t.tagline.toLowerCase().includes(lower) ||
          t.vendor.toLowerCase().includes(lower)
      )
      .slice(0, 5);
    setSuggestions(matches);
    setOpen(matches.length > 0);
    setHighlightIndex(-1);
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setQuery(val);
    updateSuggestions(val);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      setOpen(false);
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!open || suggestions.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightIndex((i) => (i < suggestions.length - 1 ? i + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightIndex((i) => (i > 0 ? i - 1 : suggestions.length - 1));
    } else if (e.key === "Enter" && highlightIndex >= 0) {
      e.preventDefault();
      const tool = suggestions[highlightIndex];
      setOpen(false);
      setQuery("");
      router.push(`/tools/${tool.slug}`);
    }
  }

  const isPage = variant === "page";

  return (
    <div ref={wrapperRef} className={`relative ${isPage ? "w-full" : "w-full max-w-xs"}`}>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className={`${isPage ? "w-5 h-5" : "w-4 h-4"} text-muted`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleChange}
            onFocus={() => query.trim() && suggestions.length > 0 && setOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder={isPage ? "Search tools, comparisons, categories..." : "Search..."}
            autoFocus={isPage}
            aria-label="Search software tools"
            aria-autocomplete="list"
            aria-expanded={open && suggestions.length > 0}
            aria-controls="search-suggestions"
            className={`w-full bg-surface-alt border border-border text-foreground placeholder:text-muted outline-none transition-colors focus:ring-2 focus:ring-accent/30 focus:border-accent ${
              isPage
                ? "pl-11 pr-4 py-3.5 text-base rounded-xl"
                : "pl-9 pr-8 py-1.5 text-[13px] rounded-lg"
            }`}
          />
          {!isPage && (
            <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
              <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-muted border border-border rounded">
                {typeof navigator !== "undefined" && /Mac|iPod|iPhone|iPad/.test(
                    // userAgentData.platform is the modern API; fall back to userAgent string
                    ((navigator as unknown as { userAgentData?: { platform?: string } }).userAgentData?.platform ?? navigator.userAgent)
                  )
                  ? "\u2318K"
                  : "Ctrl+K"}
              </kbd>
            </div>
          )}
        </div>
      </form>

      {/* Suggestions dropdown */}
      {open && suggestions.length > 0 && (
        <div id="search-suggestions" role="listbox" aria-label="Search suggestions" className="absolute z-50 mt-1.5 w-full bg-surface border border-border rounded-xl shadow-lg overflow-hidden">
          {suggestions.map((tool, i) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              role="option"
              aria-selected={i === highlightIndex}
              onClick={() => {
                setOpen(false);
                setQuery("");
              }}
              className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                i === highlightIndex
                  ? "bg-accent-light text-accent"
                  : "text-foreground hover:bg-surface-alt"
              }`}
            >
              <div className="min-w-0">
                <p className="font-medium truncate">{tool.name}</p>
                <p className="text-xs text-muted truncate">{tool.tagline}</p>
              </div>
            </Link>
          ))}
          <div className="border-t border-border px-4 py-2">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                router.push(`/search?q=${encodeURIComponent(query.trim())}`);
              }}
              className="text-xs text-accent hover:underline"
            >
              View all results for &ldquo;{query}&rdquo;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
