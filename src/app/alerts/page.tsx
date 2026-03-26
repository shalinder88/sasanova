import { Suspense } from "react";
import AlertsClient from "./alerts-client";

function AlertsStatic() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-extrabold mb-3">Never Miss a Pricing Change</h1>
      <p className="text-muted mb-6">Get notified when your tools raise prices, change plans, or reduce free tiers. Watch individual tools or entire categories.</p>
      <p className="text-sm text-muted">Loading alerts...</p>
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
