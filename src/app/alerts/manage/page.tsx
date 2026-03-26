import { Suspense } from "react";
import ManageAlertsClient from "./manage-client";

function ManageAlertsStatic() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold tracking-tight mb-3">Your Watchlist</h1>
      <p className="text-muted mb-6">Manage the tools and categories you are watching for pricing changes.</p>
      <p className="text-sm text-muted">Loading watchlist...</p>
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
