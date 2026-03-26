"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { tools } from "@/data/tools";
import { supabase } from "@/lib/supabase";

type UpdateType = "pricing" | "features" | "description" | "other";

interface ClaimForm {
  toolSlug: string;
  contactName: string;
  contactRole: string;
  contactEmail: string;
  updateTypes: UpdateType[];
  details: string;
  evidenceUrl: string;
}

const UPDATE_OPTIONS: { value: UpdateType; label: string }[] = [
  { value: "pricing", label: "Pricing is incorrect or outdated" },
  { value: "features", label: "Features or integrations are missing" },
  { value: "description", label: "Description or tagline needs updating" },
  { value: "other", label: "Other correction" },
];

function VendorClaimInner() {
  const searchParams = useSearchParams();
  const preselectedTool = searchParams.get("tool") ?? "";

  const [form, setForm] = useState<ClaimForm>({
    toolSlug: preselectedTool,
    contactName: "",
    contactRole: "",
    contactEmail: "",
    updateTypes: [],
    details: "",
    evidenceUrl: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Update toolSlug when searchParams change
  useEffect(() => {
    if (preselectedTool && tools.some((t) => t.slug === preselectedTool)) {
      setForm((prev) => ({ ...prev, toolSlug: preselectedTool }));
    }
  }, [preselectedTool]);

  const selectedTool = tools.find((t) => t.slug === form.toolSlug);

  function toggleUpdateType(type: UpdateType) {
    setForm((prev) => ({
      ...prev,
      updateTypes: prev.updateTypes.includes(type)
        ? prev.updateTypes.filter((t) => t !== type)
        : [...prev.updateTypes, type],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    // Validation
    if (!form.toolSlug) {
      setError("Please select a tool.");
      return;
    }
    if (!form.contactName.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!form.contactRole.trim()) {
      setError("Please enter your role.");
      return;
    }
    if (!form.contactEmail.trim() || !form.contactEmail.includes("@")) {
      setError("Please enter a valid company email.");
      return;
    }
    if (form.updateTypes.length === 0) {
      setError("Please select at least one update type.");
      return;
    }
    if (!form.details.trim()) {
      setError("Please provide details about what needs updating.");
      return;
    }

    setSubmitting(true);

    const claim = {
      tool_slug: form.toolSlug,
      contact_name: form.contactName.trim(),
      contact_role: form.contactRole.trim(),
      contact_email: form.contactEmail.trim().toLowerCase(),
      update_type: form.updateTypes,
      details: form.details.trim(),
      evidence_url: form.evidenceUrl.trim() || null,
      status: "pending",
      created_at: new Date().toISOString(),
    };

    try {
      // Try Supabase first
      const { error: dbError } = await supabase
        .from("vendor_claims")
        .insert([claim]);

      if (dbError) {
        // Fallback to localStorage
        const existing = JSON.parse(
          localStorage.getItem("sasanova_vendor_claims") ?? "[]"
        );
        existing.push({ ...claim, id: crypto.randomUUID() });
        localStorage.setItem(
          "sasanova_vendor_claims",
          JSON.stringify(existing)
        );
      }

      setSubmitted(true);
    } catch {
      // Fallback to localStorage on any error
      try {
        const existing = JSON.parse(
          localStorage.getItem("sasanova_vendor_claims") ?? "[]"
        );
        existing.push({ ...claim, id: crypto.randomUUID() });
        localStorage.setItem(
          "sasanova_vendor_claims",
          JSON.stringify(existing)
        );
        setSubmitted(true);
      } catch {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="w-14 h-14 rounded-full bg-success-light flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-success" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-2xl font-extrabold mb-3">Claim Submitted</h1>
        <p className="text-muted leading-relaxed mb-2">
          Thank you! We will review your submission within 48 hours.
        </p>
        <p className="text-muted leading-relaxed mb-6">
          Verified updates get a <strong className="text-foreground">Vendor Verified</strong> badge
          displayed on your tool profile.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            href={selectedTool ? `/tools/${selectedTool.slug}` : "/tools"}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-colors text-sm"
          >
            {selectedTool ? `Back to ${selectedTool.name}` : "Browse Tools"}
          </Link>
          <Link
            href="/vendors"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border font-semibold rounded-xl hover:border-accent/30 transition-colors text-sm"
          >
            Vendor Info
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <Link
          href="/vendors"
          className="inline-flex items-center gap-1 text-xs text-muted hover:text-accent transition-colors mb-4"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Vendor Info
        </Link>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
          Claim Your Profile
        </h1>
        <p className="text-sm text-muted">
          Submit corrections or updates. Our editorial team verifies and publishes within 48 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Tool select */}
        <div>
          <label htmlFor="tool" className="block text-sm font-semibold mb-1.5">
            Tool Name
          </label>
          <select
            id="tool"
            value={form.toolSlug}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, toolSlug: e.target.value }))
            }
            className="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
          >
            <option value="">Select your tool...</option>
            {tools
              .slice()
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((t) => (
                <option key={t.slug} value={t.slug}>
                  {t.name} ({t.vendor})
                </option>
              ))}
          </select>
        </div>

        {/* Contact name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-1.5">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            value={form.contactName}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, contactName: e.target.value }))
            }
            placeholder="Jane Smith"
            className="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
          />
        </div>

        {/* Role */}
        <div>
          <label htmlFor="role" className="block text-sm font-semibold mb-1.5">
            Your Role at the Company
          </label>
          <input
            id="role"
            type="text"
            value={form.contactRole}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, contactRole: e.target.value }))
            }
            placeholder="Product Marketing Manager"
            className="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-1.5">
            Company Email
          </label>
          <input
            id="email"
            type="email"
            value={form.contactEmail}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, contactEmail: e.target.value }))
            }
            placeholder="jane@yourcompany.com"
            className="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
          />
          <p className="text-[11px] text-muted mt-1">
            Must match your tool&apos;s domain for verification.
          </p>
        </div>

        {/* Update types */}
        <div>
          <p className="text-sm font-semibold mb-2">What Needs Updating?</p>
          <div className="space-y-2">
            {UPDATE_OPTIONS.map((opt) => (
              <label
                key={opt.value}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={form.updateTypes.includes(opt.value)}
                  onChange={() => toggleUpdateType(opt.value)}
                  className="w-4 h-4 rounded border-border text-accent focus:ring-accent/50"
                />
                <span className="text-sm text-muted group-hover:text-foreground transition-colors">
                  {opt.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Details */}
        <div>
          <label htmlFor="details" className="block text-sm font-semibold mb-1.5">
            Details
          </label>
          <textarea
            id="details"
            rows={5}
            value={form.details}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, details: e.target.value }))
            }
            placeholder="Tell us exactly what needs to change. Be specific — include plan names, correct prices, new feature names, etc."
            className="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent resize-y"
          />
        </div>

        {/* Evidence URL */}
        <div>
          <label htmlFor="evidence" className="block text-sm font-semibold mb-1.5">
            Evidence URL <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id="evidence"
            type="url"
            value={form.evidenceUrl}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, evidenceUrl: e.target.value }))
            }
            placeholder="https://yourcompany.com/pricing"
            className="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
          />
          <p className="text-[11px] text-muted mt-1">
            Link to your pricing page, changelog, or documentation that supports the update.
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="rounded-lg border border-danger/30 bg-danger-light/20 px-4 py-3">
            <p className="text-sm text-danger font-medium">{error}</p>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Submitting...
            </>
          ) : (
            "Submit Claim"
          )}
        </button>
      </form>
    </div>
  );
}

function VendorClaimStatic() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
          Claim Your Profile
        </h1>
        <p className="text-sm text-muted">
          Submit corrections or updates. Our editorial team verifies and
          publishes within 48 hours.
        </p>
      </div>

      <div className="space-y-6 animate-pulse">
        {/* Tool select skeleton */}
        <div>
          <div className="h-4 w-20 bg-border rounded mb-1.5" />
          <div className="h-10 w-full bg-border/60 rounded-lg" />
        </div>
        {/* Name skeleton */}
        <div>
          <div className="h-4 w-24 bg-border rounded mb-1.5" />
          <div className="h-10 w-full bg-border/60 rounded-lg" />
        </div>
        {/* Role skeleton */}
        <div>
          <div className="h-4 w-40 bg-border rounded mb-1.5" />
          <div className="h-10 w-full bg-border/60 rounded-lg" />
        </div>
        {/* Email skeleton */}
        <div>
          <div className="h-4 w-28 bg-border rounded mb-1.5" />
          <div className="h-10 w-full bg-border/60 rounded-lg" />
        </div>
        {/* Checkboxes skeleton */}
        <div>
          <div className="h-4 w-36 bg-border rounded mb-2" />
          <div className="space-y-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-4 h-4 bg-border rounded" />
                <div className="h-3 w-48 bg-border/60 rounded" />
              </div>
            ))}
          </div>
        </div>
        {/* Details skeleton */}
        <div>
          <div className="h-4 w-16 bg-border rounded mb-1.5" />
          <div className="h-28 w-full bg-border/60 rounded-lg" />
        </div>
        {/* Submit button skeleton */}
        <div className="h-12 w-full bg-border rounded-xl" />
      </div>
    </div>
  );
}

export default function VendorClaimPage() {
  return (
    <Suspense fallback={<VendorClaimStatic />}>
      <VendorClaimInner />
    </Suspense>
  );
}
