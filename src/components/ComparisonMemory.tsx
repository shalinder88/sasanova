"use client";

import { useEffect } from "react";

const STORAGE_KEY = "sasanova_recent_comparisons";
const MAX_RECENT = 5;

export interface RecentComparison {
  pair: string;
  nameA: string;
  nameB: string;
}

export function getRecentComparisons(): RecentComparison[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as RecentComparison[]) : [];
  } catch {
    return [];
  }
}

function saveRecentComparison(entry: RecentComparison) {
  try {
    const existing = getRecentComparisons();
    // Remove duplicate if exists
    const filtered = existing.filter((c) => c.pair !== entry.pair);
    // Add to front
    filtered.unshift(entry);
    // Keep only last MAX_RECENT
    const trimmed = filtered.slice(0, MAX_RECENT);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
  } catch {
    // ignore
  }
}

/**
 * Client component that saves the current comparison pair to localStorage on mount.
 * Renders nothing visible.
 */
export function SaveComparisonPair({
  pair,
  nameA,
  nameB,
}: {
  pair: string;
  nameA: string;
  nameB: string;
}) {
  useEffect(() => {
    saveRecentComparison({ pair, nameA, nameB });
  }, [pair, nameA, nameB]);

  return null;
}
