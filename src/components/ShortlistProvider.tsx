"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

const STORAGE_KEY = "sasanova-shortlist";
const MAX_ITEMS = 5;

interface ShortlistContextValue {
  shortlist: string[];
  addToShortlist: (slug: string) => void;
  removeFromShortlist: (slug: string) => void;
  isInShortlist: (slug: string) => boolean;
  clearShortlist: () => void;
}

const ShortlistContext = createContext<ShortlistContextValue | null>(null);

function readStorage(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.slice(0, MAX_ITEMS) : [];
  } catch {
    return [];
  }
}

function writeStorage(slugs: string[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs));
  } catch {
    // storage full or unavailable — silent fail
  }
}

export function ShortlistProvider({ children }: { children: ReactNode }) {
  const [shortlist, setShortlist] = useState<string[]>([]);

  // Hydrate from localStorage after mount
  useEffect(() => {
    setShortlist(readStorage());
  }, []);

  const persist = useCallback((next: string[]) => {
    setShortlist(next);
    writeStorage(next);
  }, []);

  const addToShortlist = useCallback(
    (slug: string) => {
      setShortlist((prev) => {
        if (prev.includes(slug) || prev.length >= MAX_ITEMS) return prev;
        const next = [...prev, slug];
        writeStorage(next);
        return next;
      });
    },
    [],
  );

  const removeFromShortlist = useCallback(
    (slug: string) => {
      setShortlist((prev) => {
        const next = prev.filter((s) => s !== slug);
        writeStorage(next);
        return next;
      });
    },
    [],
  );

  const isInShortlist = useCallback(
    (slug: string) => shortlist.includes(slug),
    [shortlist],
  );

  const clearShortlist = useCallback(() => {
    persist([]);
  }, [persist]);

  return (
    <ShortlistContext value={{ shortlist, addToShortlist, removeFromShortlist, isInShortlist, clearShortlist }}>
      {children}
    </ShortlistContext>
  );
}

export function useShortlist(): ShortlistContextValue {
  const ctx = useContext(ShortlistContext);
  if (!ctx) {
    throw new Error("useShortlist must be used within a ShortlistProvider");
  }
  return ctx;
}
