import { Suspense } from "react";
import { tools } from "@/data/tools";
import AuditClient from "./audit-client";

function AuditStatic() {
  return (
    <div className="min-h-screen">
      <section className="border-b border-border bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              Audit Your SaaS Stack
              <br />
              <span className="text-accent">Find Hidden Waste</span>
            </h1>
            <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto mb-2">
              Audit your SaaS stack and find where you&apos;re overpaying. Input your current tools and get a
              detailed report showing savings opportunities.
            </p>
            <p className="text-sm text-muted/70 mb-3">
              Powered by {tools.length}+ pricing data points with explicit provenance tracking.
            </p>
            <p className="text-sm text-accent font-medium max-w-xl mx-auto">
              78% of IT leaders got hit with unexpected SaaS charges this year. Run your free audit to make sure you&apos;re not next.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <h2 className="text-lg font-bold mb-4">Example Audit Result</h2>
        <div className="border border-border rounded-xl p-5 bg-surface mb-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="border border-border rounded-xl p-4 text-center">
              <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">Monthly Spend</p>
              <p className="text-2xl font-extrabold text-foreground">$847</p>
            </div>
            <div className="border border-success/30 rounded-xl p-4 bg-success/5 text-center">
              <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">Potential Savings</p>
              <p className="text-2xl font-extrabold text-success">$312/mo</p>
            </div>
            <div className="border border-border rounded-xl p-4 text-center">
              <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">Audit Score</p>
              <p className="text-2xl font-extrabold text-yellow-400">62%</p>
            </div>
            <div className="border border-border rounded-xl p-4 text-center">
              <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">Tools Audited</p>
              <p className="text-2xl font-extrabold text-accent">5</p>
            </div>
          </div>
          <p className="text-xs text-muted text-center">
            Start your own audit above to see personalized results.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AuditPage() {
  return (
    <Suspense fallback={<AuditStatic />}>
      <AuditClient />
    </Suspense>
  );
}
