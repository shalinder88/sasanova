"use client";

import { useState } from "react";

export default function EmailCapture({ variant = "default" }: { variant?: "default" | "inline" | "hero" }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to beehiiv / ConvertKit
    setDone(true);
  };

  if (done) {
    return (
      <div className={`flex items-center gap-2 px-4 py-3 rounded-lg bg-success-light border border-success/20 ${variant === "hero" ? "justify-center" : ""}`}>
        <svg className="w-4 h-4 text-success shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <p className="text-sm font-medium text-success">You&apos;re subscribed! Check your inbox.</p>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <form onSubmit={submit} className="flex gap-2">
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" className="flex-1 px-3 py-2 text-sm border border-border rounded-lg bg-background focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none" />
        <button type="submit" className="px-4 py-2 text-sm font-semibold bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors whitespace-nowrap">Subscribe</button>
      </form>
    );
  }

  return (
    <div className={`border border-border rounded-xl p-6 bg-surface ${variant === "hero" ? "text-center" : ""}`}>
      <h3 className="text-lg font-bold mb-1">The Sasanova Weekly</h3>
      <p className="text-sm text-muted mb-4">New tool reviews, pricing changes, and comparison updates — every Tuesday.</p>
      <form onSubmit={submit} className={`flex flex-col sm:flex-row gap-2 ${variant === "hero" ? "max-w-md mx-auto" : ""}`}>
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" className="flex-1 px-3.5 py-2.5 text-sm border border-border rounded-lg bg-background focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none" />
        <button type="submit" className="px-5 py-2.5 text-sm font-semibold bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors whitespace-nowrap">Subscribe Free</button>
      </form>
      <p className="text-[11px] text-muted mt-2">No spam. Unsubscribe anytime.</p>
    </div>
  );
}
