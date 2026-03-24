"use client";

import Link from "next/link";
import { useState } from "react";
import { LogoIcon } from "./Logo";
import SearchBar from "./SearchBar";

const nav = [
  { href: "/tools", label: "Tools Directory" },
  { href: "/compare", label: "Compare" },
  { href: "/best", label: "Best Of" },
  { href: "/alternatives", label: "Alternatives" },
  { href: "/pricing", label: "Pricing" },
  { href: "/guides", label: "Guides" },
  { href: "/vault", label: "Vault" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon size={28} />
            <span className="text-lg font-bold tracking-tight">
              Sasa<span className="text-accent">nova</span>
            </span>
          </Link>

          {/* Search */}
          <div className="hidden md:block">
            <SearchBar />
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 text-[13px] font-medium text-muted hover:text-foreground rounded-md hover:bg-surface transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-2">
            <Link
              href="/vault"
              className="hidden sm:inline-flex items-center px-3.5 py-1.5 text-[13px] font-semibold bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors"
            >
              Newsletter
            </Link>
            <button
              className="lg:hidden p-1.5 text-muted hover:text-foreground"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
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
          <div className="lg:hidden pb-3 pt-1 space-y-0.5">
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
          </div>
        )}
      </nav>
    </header>
  );
}
