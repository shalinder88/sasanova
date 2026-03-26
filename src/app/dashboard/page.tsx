import { Suspense } from "react";
import DashboardClient from "./dashboard-client";

function DashboardStatic() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
          Your SaaS Dashboard
        </h1>
        <p className="text-muted text-sm">
          Track spending, set budgets, and find savings across your tool stack.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        <div className="rounded-xl border border-border bg-surface p-4">
          <p className="text-xs text-muted uppercase tracking-wider mb-1">Monthly Spend</p>
          <p className="text-xl font-extrabold text-accent">--</p>
        </div>
        <div className="rounded-xl border border-border bg-surface p-4">
          <p className="text-xs text-muted uppercase tracking-wider mb-1">Annual Spend</p>
          <p className="text-xl font-extrabold text-foreground">--</p>
        </div>
        <div className="rounded-xl border border-border bg-surface p-4">
          <p className="text-xs text-muted uppercase tracking-wider mb-1">Tools in Stack</p>
          <p className="text-xl font-extrabold text-foreground">--</p>
        </div>
        <div className="rounded-xl border border-border bg-surface p-4">
          <p className="text-xs text-muted uppercase tracking-wider mb-1">Potential Savings</p>
          <p className="text-xl font-extrabold text-foreground">--</p>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Your Stack</h2>
        <div className="rounded-xl border border-border bg-surface p-8 text-center">
          <p className="text-muted text-sm">
            Add your SaaS tools to track spending and discover savings.
          </p>
        </div>
      </section>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<DashboardStatic />}>
      <DashboardClient />
    </Suspense>
  );
}
