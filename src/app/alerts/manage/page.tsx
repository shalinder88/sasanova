import { Suspense } from "react";
import ManageAlertsClient from "./manage-client";

function ManageAlertsStatic() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold tracking-tight mb-3">Your Watchlist</h1>
      <p className="text-muted mb-6">
        Manage the tools and categories you are watching for pricing changes.
      </p>
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="border border-border rounded-xl p-4 bg-surface animate-pulse"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <div className="h-4 w-32 bg-border rounded" />
                <div className="h-3 w-48 bg-border/60 rounded" />
              </div>
              <div className="h-8 w-20 bg-border rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ManageAlertsPage() {
  return (
    <Suspense fallback={<ManageAlertsStatic />}>
      <ManageAlertsClient />
    </Suspense>
  );
}
