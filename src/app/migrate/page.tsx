import { Suspense } from "react";
import Link from "next/link";
import MigrateClient from "./migrate-client";

function MigrateStatic() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="mb-10">
        <div className="flex items-center gap-2 text-xs text-muted mb-4">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <span>/</span>
          <span className="text-foreground">Migration Cost Estimator</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3">
          Know Before You Switch
        </h1>
        <p className="text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
          Calculate the real cost of switching tools, including subscription
          differences, data migration time, and productivity loss during
          transition.
        </p>
      </div>

      {/* Example migration cost breakdown */}
      <div className="border border-border rounded-2xl bg-surface p-6 sm:p-8 mb-8">
        <h2 className="text-lg font-bold text-foreground mb-4">
          Example: Mailchimp &rarr; ConvertKit Migration
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="border border-border rounded-xl p-4 bg-background">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
              Subscription Change
            </p>
            <p className="text-xl font-extrabold text-foreground">
              -$20/mo
            </p>
            <p className="text-xs text-muted mt-1">
              Mailchimp Standard $45 &rarr; ConvertKit Creator $25
            </p>
          </div>
          <div className="border border-border rounded-xl p-4 bg-background">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
              Migration Effort
            </p>
            <p className="text-xl font-extrabold text-foreground">
              ~8 hours
            </p>
            <p className="text-xs text-muted mt-1">
              Export lists, recreate automations, update forms
            </p>
          </div>
          <div className="border border-border rounded-xl p-4 bg-background">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
              Break-Even
            </p>
            <p className="text-xl font-extrabold text-foreground">
              ~3 months
            </p>
            <p className="text-xs text-muted mt-1">
              Monthly savings cover migration effort within 3 months
            </p>
          </div>
        </div>
        <p className="text-xs text-muted">
          Use the interactive calculator below to estimate your own migration costs.
        </p>
      </div>

      {/* What the calculator covers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="border border-border rounded-xl p-4 bg-surface">
          <p className="text-sm font-semibold text-foreground mb-1">Subscription Comparison</p>
          <p className="text-xs text-muted">Side-by-side monthly and annual cost of your current vs new tool.</p>
        </div>
        <div className="border border-border rounded-xl p-4 bg-surface">
          <p className="text-sm font-semibold text-foreground mb-1">Hidden Costs</p>
          <p className="text-xs text-muted">Training time, data export fees, integration rebuilds, and downtime risk.</p>
        </div>
      </div>
    </div>
  );
}

export default function MigratePage() {
  return (
    <Suspense fallback={<MigrateStatic />}>
      <MigrateClient />
    </Suspense>
  );
}
