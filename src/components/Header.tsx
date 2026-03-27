"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { LogoIcon } from "./Logo";
import SearchBar from "./SearchBar";

const nav = [
  { href: "/tools", label: "Tools Directory" },
  { href: "/compare", label: "Compare" },
  { href: "/calculate", label: "Calculator" },
  { href: "/audit", label: "Audit" },
  { href: "/guides", label: "Guides" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close on Escape and trap focus within mobile menu
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !menuRef.current) return;
      const focusable = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>("a, button, [tabindex]:not([tabindex='-1'])")
      ).filter((el) => !el.hasAttribute("disabled"));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    // Move focus into menu on open
    menuRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="text-lg font-bold tracking-tight" aria-label="Sasanova">
              Sasa<span className="text-accent">nova</span>
            </span>
          </Link>

          {/* Search */}
          <div className="hidden md:block">
            <SearchBar />
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1.5">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 text-[13px] font-medium text-muted hover:text-foreground rounded-md hover:bg-surface transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/my-stack"
              className="ml-1 px-3 py-1.5 text-[12px] font-bold bg-accent text-white rounded-md hover:brightness-110 transition-all flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
              </svg>
              My Stack
            </Link>
            <Link
              href="/pro"
              className="ml-1 px-2 py-1 text-[11px] font-medium text-muted hover:text-accent transition-colors"
            >
              Pro
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2">
            <button
              ref={toggleRef}
              className="lg:hidden p-1.5 text-muted hover:text-foreground"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div id="mobile-menu" ref={menuRef} className="lg:hidden pb-3 pt-1 space-y-0.5" role="dialog" aria-label="Navigation menu">
            <div className="px-3 pb-2 pt-1">
              <SearchBar />
            </div>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-sm text-muted hover:text-foreground hover:bg-surface rounded-md transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/my-stack"
              className="block px-3 py-2 text-sm font-bold text-accent hover:bg-surface rounded-md transition-colors"
              onClick={() => setOpen(false)}
            >
              My Stack
            </Link>
            <Link
              href="/pro"
              className="block px-3 py-2 text-xs text-muted hover:text-accent hover:bg-surface rounded-md transition-colors"
              onClick={() => setOpen(false)}
            >
              Pro
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
