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
          Migration Cost Estimator
        </h1>
        <p className="text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
          Know Before You Switch — Calculate the real cost of switching tools, including time,
          data migration, and productivity loss.
        </p>
      </div>

      <div className="border border-border rounded-2xl bg-surface p-6 sm:p-8">
        <p className="text-sm text-muted text-center py-8">
          Loading migration calculator...
        </p>
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
