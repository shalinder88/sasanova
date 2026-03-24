"use client";

import { useShortlist } from "./ShortlistProvider";

interface ShortlistButtonProps {
  slug: string;
  name: string;
  size?: "sm" | "md";
}

export default function ShortlistButton({
  slug,
  name,
  size = "md",
}: ShortlistButtonProps) {
  const { addToShortlist, removeFromShortlist, isInShortlist, shortlist } =
    useShortlist();

  const active = isInShortlist(slug);
  const full = shortlist.length >= 5 && !active;

  function handleClick() {
    if (active) {
      removeFromShortlist(slug);
    } else if (!full) {
      addToShortlist(slug);
    }
  }

  const sizeClasses =
    size === "sm"
      ? "px-2.5 py-1 text-[11px] gap-1"
      : "px-3.5 py-1.5 text-xs gap-1.5";

  return (
    <button
      onClick={handleClick}
      disabled={full}
      title={
        full
          ? "Compare list is full (max 5)"
          : active
            ? `Remove ${name} from compare list`
            : `Add ${name} to compare list`
      }
      className={`inline-flex items-center font-semibold rounded-lg transition-colors ${sizeClasses} ${
        active
          ? "bg-accent text-white hover:bg-accent-dark"
          : full
            ? "border border-border text-muted cursor-not-allowed opacity-50"
            : "border border-border text-muted hover:border-accent hover:text-accent"
      }`}
    >
      {active ? (
        <svg
          className={size === "sm" ? "w-3 h-3" : "w-3.5 h-3.5"}
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      ) : (
        <svg
          className={size === "sm" ? "w-3 h-3" : "w-3.5 h-3.5"}
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      )}
      {active ? "In compare list" : "Add to compare"}
      {shortlist.length > 0 && (
        <span
          className={`inline-flex items-center justify-center rounded-full font-bold leading-none ${
            active
              ? "bg-white/20 text-white"
              : "bg-accent-light text-accent"
          } ${size === "sm" ? "w-4 h-4 text-[9px] ml-0.5" : "w-5 h-5 text-[10px] ml-1"}`}
        >
          {shortlist.length}
        </span>
      )}
    </button>
  );
}
