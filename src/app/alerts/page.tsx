import { Suspense } from "react";
import { categories, getToolsByCategory } from "@/data/tools";
import AlertsClient from "./alerts-client";

/* ── Watchable categories with live tool counts (server-computed) ── */
const watchableCategories = categories.slice(0, 6).map((cat) => ({
  name: cat.name,
  slug: cat.slug,
  toolCount: getToolsByCategory(cat.slug).length,
}));

function AlertsStatic() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
        Never Miss a Pricing Change
      </h1>
      <p className="text-muted text-base mb-2">
        Watch individual tools or entire categories. Get notified when prices
        increase, free tiers shrink, or plans change.
      </p>
      <p className="text-sm text-muted mb-8">
        SaaS pricing changes constantly &mdash; we track it so you don&apos;t have to.
      </p>

      <h2 className="text-lg font-semibold text-foreground mb-4">
        Watchable Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        {watchableCategories.map((cat) => (
          <div
            key={cat.slug}
            className="border border-border rounded-xl p-4 bg-surface"
          >
            <p className="text-sm font-semibold text-foreground">{cat.name}</p>
            <p className="text-xs text-muted mt-0.5">
              {cat.toolCount} tool{cat.toolCount !== 1 ? "s" : ""} tracked
            </p>
          </div>
        ))}
      </div>

      <div className="border border-border rounded-xl p-5 bg-surface-alt mb-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
          Recent Example
        </p>
        <p className="text-sm text-foreground">
          Mailchimp reduced its free tier from 2,000 to 250 contacts &mdash;
          subscribers who set up alerts were notified within hours.
        </p>
      </div>

      <p className="text-xs text-muted">
        Set up your watchlist below to receive email or in-app notifications.
      </p>
    </div>
  );
}

export default function AlertsPage() {
  return (
    <Suspense fallback={<AlertsStatic />}>
      <AlertsClient />
    </Suspense>
  );
}
