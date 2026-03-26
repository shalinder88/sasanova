"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { tools, type Tool } from "@/data/tools";
import { ProNudge } from "@/components/ProGate";
import { isProUser } from "@/lib/pro";

/* ── Helpers ── */

function getAnnualCostForTeam(tool: Tool, teamSize: number): number {
  // Find the most relevant plan: highlighted or first paid plan
  const plan =
    tool.pricing.find((p) => p.highlighted) ??
    tool.pricing.find((p) => (p.priceMonthly ?? 0) > 0) ??
    tool.pricing[0];
  if (!plan) return 0;
  const monthly = plan.priceMonthly ?? 0;
  if (plan.billingModel === "per_seat") return monthly * teamSize * 12;
  return monthly * 12;
}

function getPlanName(tool: Tool): string {
  const plan =
    tool.pricing.find((p) => p.highlighted) ??
    tool.pricing.find((p) => (p.priceMonthly ?? 0) > 0) ??
    tool.pricing[0];
  return plan?.name ?? "Unknown";
}

function getMigrationHours(migrationDifficulty: number): number {
  // migrationDifficulty is 1-10 where 10 = easiest to switch to
  // Invert: lower score = harder = more hours
  // Maps 1-10 to 40-2 hours
  return Math.round(2 + (10 - migrationDifficulty) * (38 / 9));
}

function getDifficultyLabel(migrationDifficulty: number): string {
  if (migrationDifficulty >= 8) return "Easy";
  if (migrationDifficulty >= 6) return "Moderate";
  if (migrationDifficulty >= 4) return "Hard";
  return "Very Hard";
}

function getDifficultyColor(migrationDifficulty: number): string {
  if (migrationDifficulty >= 8) return "text-success";
  if (migrationDifficulty >= 6) return "text-warning";
  if (migrationDifficulty >= 4) return "text-danger";
  return "text-danger";
}

function getDataHours(volume: "light" | "medium" | "heavy"): number {
  if (volume === "light") return 1;
  if (volume === "medium") return 4;
  return 8;
}

function getOnboardingFee(tool: Tool): number {
  // Known onboarding fees for specific tools
  const fees: Record<string, number> = {
    "hubspot-crm": 3000,
    salesforce: 5000,
    rippling: 1500,
  };
  return fees[tool.slug] ?? 0;
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/* ── Component ── */

export default function MigratePage() {
  const searchParams = useSearchParams();
  const preselectedFrom = searchParams.get("from") ?? "";

  const [fromSlug, setFromSlug] = useState(preselectedFrom);
  const [toSlug, setToSlug] = useState("");
  const [teamSize, setTeamSize] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [dataVolume, setDataVolume] = useState<"light" | "medium" | "heavy">("medium");
  const [calculated, setCalculated] = useState(false);
  const [savedAt, setSavedAt] = useState<string | null>(null);

  // Sync preselectedFrom on param change
  useEffect(() => {
    if (preselectedFrom) setFromSlug(preselectedFrom);
  }, [preselectedFrom]);

  const fromTool = useMemo(() => tools.find((t) => t.slug === fromSlug), [fromSlug]);
  const toTool = useMemo(() => tools.find((t) => t.slug === toSlug), [toSlug]);

  const results = useMemo(() => {
    if (!fromTool || !toTool || !calculated) return null;

    // Subscription comparison
    const fromAnnual = getAnnualCostForTeam(fromTool, teamSize);
    const toAnnual = getAnnualCostForTeam(toTool, teamSize);
    const annualDiff = toAnnual - fromAnnual;

    // Migration effort
    const dataExportHours = getDataHours(dataVolume);
    const dataImportHours = getDataHours(dataVolume);
    const configHours = getMigrationHours(toTool.scores.migrationDifficulty);
    const retrainingHours = teamSize * 2;
    const totalMigrationHours = dataExportHours + dataImportHours + configHours + retrainingHours;
    const migrationLaborCost = totalMigrationHours * hourlyRate;

    // Productivity impact
    const productivityCost = teamSize * hourlyRate * 40 * 2 * 0.2;

    // Onboarding fees
    const onboardingFee = getOnboardingFee(toTool);

    // Total one-time switching cost
    const totalSwitchingCost = migrationLaborCost + productivityCost + onboardingFee;

    // Break-even
    const monthlySavings = annualDiff < 0 ? Math.abs(annualDiff) / 12 : 0;
    const breakEvenMonths = monthlySavings > 0 ? Math.ceil(totalSwitchingCost / monthlySavings) : null;

    // 3-year comparison
    const threeYearCurrent = fromAnnual * 3;
    const threeYearNew = toAnnual * 3 + totalSwitchingCost;

    // Features comparison
    const fromFeatures = new Set(fromTool.features);
    const toFeatures = new Set(toTool.features);
    const gained = toTool.features.filter((f) => !fromFeatures.has(f));
    const lost = fromTool.features.filter((f) => !toFeatures.has(f));

    return {
      fromAnnual,
      toAnnual,
      annualDiff,
      dataExportHours,
      dataImportHours,
      configHours,
      retrainingHours,
      totalMigrationHours,
      migrationLaborCost,
      productivityCost,
      onboardingFee,
      totalSwitchingCost,
      monthlySavings,
      breakEvenMonths,
      threeYearCurrent,
      threeYearNew,
      gained,
      lost,
    };
  }, [fromTool, toTool, teamSize, hourlyRate, dataVolume, calculated]);

  function handleCalculate() {
    if (fromSlug && toSlug && fromSlug !== toSlug) {
      setCalculated(true);
    }
  }

  function handleSave() {
    if (!results || !fromTool || !toTool) return;
    const key = `sasanova_migration_${Date.now()}`;
    const data = {
      from: fromSlug,
      to: toSlug,
      teamSize,
      hourlyRate,
      dataVolume,
      totalSwitchingCost: results.totalSwitchingCost,
      savedAt: new Date().toISOString(),
    };
    localStorage.setItem(key, JSON.stringify(data));
    setSavedAt(new Date().toLocaleString());
  }

  function handleShare() {
    const url = new URL(window.location.href);
    url.searchParams.set("from", fromSlug);
    url.searchParams.set("to", toSlug);
    url.searchParams.set("team", String(teamSize));
    url.searchParams.set("rate", String(hourlyRate));
    url.searchParams.set("volume", dataVolume);
    navigator.clipboard.writeText(url.toString());
    alert("Link copied to clipboard!");
  }

  // Load URL params on mount
  useEffect(() => {
    const to = searchParams.get("to");
    const team = searchParams.get("team");
    const rate = searchParams.get("rate");
    const volume = searchParams.get("volume");
    if (to) setToSlug(to);
    if (team) setTeamSize(Number(team));
    if (rate) setHourlyRate(Number(rate));
    if (volume && ["light", "medium", "heavy"].includes(volume))
      setDataVolume(volume as "light" | "medium" | "heavy");
    if (preselectedFrom && to) {
      // Auto-calculate if both provided via URL
      setTimeout(() => setCalculated(true), 100);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const isPro = isProUser();
  const sortedTools = useMemo(() => [...tools].sort((a, b) => a.name.localeCompare(b.name)), []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      {/* Header */}
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
          Know Before You Switch — Calculate the real cost of switching tools, including time, data migration, and productivity loss.
        </p>
      </div>

      {/* Input Form */}
      <div className="border border-border rounded-2xl bg-surface p-6 sm:p-8 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {/* Switching FROM */}
          <div>
            <label className="block text-sm font-semibold mb-2">Switching FROM</label>
            <select
              value={fromSlug}
              onChange={(e) => { setFromSlug(e.target.value); setCalculated(false); }}
              className="w-full px-4 py-2.5 rounded-lg bg-surface-alt border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="">Select current tool...</option>
              {sortedTools.map((t) => (
                <option key={t.slug} value={t.slug} disabled={t.slug === toSlug}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>

          {/* Switching TO */}
          <div>
            <label className="block text-sm font-semibold mb-2">Switching TO</label>
            <select
              value={toSlug}
              onChange={(e) => { setToSlug(e.target.value); setCalculated(false); }}
              className="w-full px-4 py-2.5 rounded-lg bg-surface-alt border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="">Select new tool...</option>
              {sortedTools.map((t) => (
                <option key={t.slug} value={t.slug} disabled={t.slug === fromSlug}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Team Size Slider */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2">
            Team size: <span className="text-accent">{teamSize}</span>
          </label>
          <input
            type="range"
            min={1}
            max={50}
            value={teamSize}
            onChange={(e) => { setTeamSize(Number(e.target.value)); setCalculated(false); }}
            className="w-full accent-accent"
          />
          <div className="flex justify-between text-xs text-muted mt-1">
            <span>1</span>
            <span>25</span>
            <span>50</span>
          </div>
        </div>

        {/* Hourly Rate Slider */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2">
            Your hourly rate: <span className="text-accent">{formatCurrency(hourlyRate)}</span>
          </label>
          <input
            type="range"
            min={25}
            max={200}
            step={5}
            value={hourlyRate}
            onChange={(e) => { setHourlyRate(Number(e.target.value)); setCalculated(false); }}
            className="w-full accent-accent"
          />
          <div className="flex justify-between text-xs text-muted mt-1">
            <span>$25</span>
            <span>$100</span>
            <span>$200</span>
          </div>
        </div>

        {/* Data Volume */}
        <div className="mb-8">
          <label className="block text-sm font-semibold mb-3">Data volume</label>
          <div className="flex flex-wrap gap-3">
            {([
              { value: "light" as const, label: "Light", desc: "< 1K records" },
              { value: "medium" as const, label: "Medium", desc: "1K - 10K records" },
              { value: "heavy" as const, label: "Heavy", desc: "10K+ records" },
            ]).map((opt) => (
              <button
                key={opt.value}
                onClick={() => { setDataVolume(opt.value); setCalculated(false); }}
                className={`flex-1 min-w-[120px] px-4 py-3 rounded-xl border text-sm text-left transition-all ${
                  dataVolume === opt.value
                    ? "border-accent bg-accent-light text-foreground"
                    : "border-border bg-surface-alt text-muted hover:border-border-strong"
                }`}
              >
                <span className="font-semibold block">{opt.label}</span>
                <span className="text-xs opacity-70">{opt.desc}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Calculate Button */}
        <button
          onClick={handleCalculate}
          disabled={!fromSlug || !toSlug || fromSlug === toSlug}
          className="w-full py-3.5 px-6 bg-accent text-white font-bold rounded-xl hover:brightness-110 transition-all disabled:opacity-40 disabled:cursor-not-allowed text-base"
        >
          Calculate Migration Cost
        </button>
        {fromSlug === toSlug && fromSlug && (
          <p className="text-xs text-danger mt-2 text-center">Select two different tools to compare.</p>
        )}
      </div>

      {/* ═══ Results ═══ */}
      {results && fromTool && toTool && (
        <div className="space-y-6 animate-in">
          {/* a) Subscription Comparison */}
          <section className="border border-border rounded-2xl bg-surface overflow-hidden">
            <div className="px-6 py-4 border-b border-border bg-surface-alt">
              <h2 className="text-base font-bold flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Subscription Comparison
              </h2>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted">{fromTool.name} ({getPlanName(fromTool)}) annual cost at {teamSize} {teamSize === 1 ? "seat" : "seats"}</span>
                <span className="font-bold font-mono">{formatCurrency(results.fromAnnual)}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted">{toTool.name} ({getPlanName(toTool)}) annual cost at {teamSize} {teamSize === 1 ? "seat" : "seats"}</span>
                <span className="font-bold font-mono">{formatCurrency(results.toAnnual)}</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between items-center text-sm">
                <span className="font-semibold">Annual subscription difference</span>
                <span className={`font-bold font-mono ${results.annualDiff <= 0 ? "text-success" : "text-danger"}`}>
                  {results.annualDiff <= 0 ? "Save " : "+"}
                  {formatCurrency(Math.abs(results.annualDiff))}/yr
                </span>
              </div>
            </div>
          </section>

          {/* b) Migration Effort */}
          <section className="border border-border rounded-2xl bg-surface overflow-hidden">
            <div className="px-6 py-4 border-b border-border bg-surface-alt">
              <h2 className="text-base font-bold flex items-center gap-2">
                <svg className="w-5 h-5 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Migration Effort Estimate
              </h2>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted">Data export time</span>
                <span className="font-mono">{results.dataExportHours}h</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted">Data import time</span>
                <span className="font-mono">{results.dataImportHours}h</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted">Configuration &amp; setup time</span>
                <span className="font-mono">{results.configHours}h</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted">Team retraining ({teamSize} x 2h)</span>
                <span className="font-mono">{results.retrainingHours}h</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between items-center text-sm">
                <span className="font-semibold">Total migration hours</span>
                <span className="font-bold font-mono">{results.totalMigrationHours}h</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold">Migration labor cost ({results.totalMigrationHours}h x {formatCurrency(hourlyRate)})</span>
                <span className="font-bold font-mono text-warning">{formatCurrency(results.migrationLaborCost)}</span>
              </div>
            </div>
          </section>

          {/* c) Productivity Impact */}
          <section className="border border-border rounded-2xl bg-surface overflow-hidden">
            <div className="px-6 py-4 border-b border-border bg-surface-alt">
              <h2 className="text-base font-bold flex items-center gap-2">
                <svg className="w-5 h-5 text-danger" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
                Productivity Impact
              </h2>
            </div>
            <div className="p-6 space-y-3">
              <p className="text-sm text-muted">
                Estimated 2-week productivity dip at 20% reduced output during transition period.
              </p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted">
                  {teamSize} {teamSize === 1 ? "person" : "people"} x {formatCurrency(hourlyRate)}/hr x 40h/wk x 2 wks x 20%
                </span>
                <span className="font-bold font-mono text-danger">{formatCurrency(results.productivityCost)}</span>
              </div>
            </div>
          </section>

          {/* d) Total Switching Cost */}
          <section className="border-2 border-accent/50 rounded-2xl bg-surface overflow-hidden">
            <div className="px-6 py-4 border-b border-accent/30 bg-accent-light">
              <h2 className="text-base font-bold flex items-center gap-2 text-accent">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Total One-Time Switching Cost
              </h2>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted">Migration labor</span>
                <span className="font-mono">{formatCurrency(results.migrationLaborCost)}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted">Productivity dip</span>
                <span className="font-mono">{formatCurrency(results.productivityCost)}</span>
              </div>
              {results.onboardingFee > 0 && (
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted">{toTool.name} onboarding fee</span>
                  <span className="font-mono">{formatCurrency(results.onboardingFee)}</span>
                </div>
              )}
              <div className="border-t-2 border-accent/30 pt-4 flex justify-between items-center">
                <span className="text-lg font-extrabold">Total Switching Cost</span>
                <span className="text-2xl font-extrabold font-mono text-accent">{formatCurrency(results.totalSwitchingCost)}</span>
              </div>
            </div>
          </section>

          {/* e) Break-Even Analysis */}
          <section className="border border-border rounded-2xl bg-surface overflow-hidden">
            <div className="px-6 py-4 border-b border-border bg-surface-alt">
              <h2 className="text-base font-bold flex items-center gap-2">
                <svg className="w-5 h-5 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Break-Even Analysis
              </h2>
            </div>
            <div className="p-6 space-y-4">
              {results.annualDiff < 0 ? (
                <>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted">Monthly savings with {toTool.name}</span>
                    <span className="font-bold font-mono text-success">{formatCurrency(results.monthlySavings)}/mo</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted">Months to break even</span>
                    <span className="font-bold font-mono text-cyan">{results.breakEvenMonths} months</span>
                  </div>
                  <div className="bg-success-light rounded-xl p-4 text-sm text-success">
                    {results.breakEvenMonths && results.breakEvenMonths <= 12
                      ? `The switch pays for itself within ${results.breakEvenMonths} months. After that, you save ${formatCurrency(Math.abs(results.annualDiff))}/year.`
                      : `The switch takes ${results.breakEvenMonths} months to pay off. Make sure you plan to stay with ${toTool.name} long enough.`}
                  </div>
                </>
              ) : results.annualDiff > 0 ? (
                <div className="bg-danger-light rounded-xl p-4 text-sm text-danger">
                  {toTool.name} costs {formatCurrency(results.annualDiff)} more per year than {fromTool.name}. Combined with {formatCurrency(results.totalSwitchingCost)} in switching costs, this is a significant investment. Make sure the feature gains justify it.
                </div>
              ) : (
                <div className="bg-cyan-light rounded-xl p-4 text-sm text-cyan">
                  Both tools cost the same annually. The only cost is the {formatCurrency(results.totalSwitchingCost)} one-time switching investment.
                </div>
              )}

              {/* 3-year comparison */}
              <div className="border-t border-border pt-4">
                <h3 className="text-sm font-bold mb-3">3-Year Total Cost Comparison</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border bg-surface-alt p-4 text-center">
                    <p className="text-xs text-muted mb-1">Stay with {fromTool.name}</p>
                    <p className="text-xl font-extrabold font-mono">{formatCurrency(results.threeYearCurrent)}</p>
                  </div>
                  <div className={`rounded-xl border p-4 text-center ${
                    results.threeYearNew < results.threeYearCurrent
                      ? "border-success/30 bg-success-light/30"
                      : "border-danger/30 bg-danger-light/30"
                  }`}>
                    <p className="text-xs text-muted mb-1">Switch to {toTool.name}</p>
                    <p className="text-xl font-extrabold font-mono">{formatCurrency(results.threeYearNew)}</p>
                    <p className={`text-xs font-semibold mt-1 ${
                      results.threeYearNew < results.threeYearCurrent ? "text-success" : "text-danger"
                    }`}>
                      {results.threeYearNew < results.threeYearCurrent
                        ? `Save ${formatCurrency(results.threeYearCurrent - results.threeYearNew)}`
                        : `+${formatCurrency(results.threeYearNew - results.threeYearCurrent)}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* f) Risk Assessment */}
          <section className="border border-border rounded-2xl bg-surface overflow-hidden">
            <div className="px-6 py-4 border-b border-border bg-surface-alt">
              <h2 className="text-base font-bold flex items-center gap-2">
                <svg className="w-5 h-5 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Risk Assessment
              </h2>
            </div>
            <div className="p-6 space-y-5">
              {/* Migration difficulty */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted">Migration Difficulty:</span>
                <span className={`text-sm font-bold ${getDifficultyColor(toTool.scores.migrationDifficulty)}`}>
                  {getDifficultyLabel(toTool.scores.migrationDifficulty)}
                </span>
                <span className="text-xs text-muted">({toTool.scores.migrationDifficulty}/10 ease)</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* What you'll lose */}
                <div className="border border-danger/20 bg-danger-light/10 rounded-xl p-4">
                  <h3 className="text-sm font-bold text-danger mb-2">What you may lose</h3>
                  <ul className="space-y-1.5">
                    {fromTool.avoidIf.length === 0 && results.lost.length === 0 && (
                      <li className="text-xs text-muted">No significant losses identified.</li>
                    )}
                    {results.lost.slice(0, 5).map((f) => (
                      <li key={f} className="text-xs text-muted flex items-start gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-danger shrink-0 mt-1.5" />
                        {f}
                      </li>
                    ))}
                    {fromTool.bestFor.slice(0, 2).map((b) => (
                      <li key={b} className="text-xs text-muted flex items-start gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-danger shrink-0 mt-1.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What you'll gain */}
                <div className="border border-success/20 bg-success-light/10 rounded-xl p-4">
                  <h3 className="text-sm font-bold text-success mb-2">What you'll gain</h3>
                  <ul className="space-y-1.5">
                    {results.gained.slice(0, 5).map((f) => (
                      <li key={f} className="text-xs text-muted flex items-start gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-success shrink-0 mt-1.5" />
                        {f}
                      </li>
                    ))}
                    {toTool.bestFor.slice(0, 2).map((b) => (
                      <li key={b} className="text-xs text-muted flex items-start gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-success shrink-0 mt-1.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Link to relevant comparison */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/compare/${fromSlug}-vs-${toSlug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-accent bg-accent-light rounded-lg hover:bg-accent hover:text-white transition-colors"
                >
                  Full comparison: {fromTool.name} vs {toTool.name} →
                </Link>
                <Link
                  href={`/guides`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-foreground bg-surface-alt border border-border rounded-lg hover:border-accent transition-colors"
                >
                  Migration guides →
                </Link>
              </div>
            </div>
          </section>

          {/* Save & Share */}
          <section className="border border-border rounded-2xl bg-surface p-6">
            <div className="flex flex-wrap gap-3 items-center">
              <button
                onClick={handleSave}
                className="px-5 py-2.5 text-sm font-semibold bg-surface-alt border border-border rounded-lg hover:border-accent transition-colors"
              >
                Save Estimate
              </button>
              <button
                onClick={handleShare}
                className="px-5 py-2.5 text-sm font-semibold bg-surface-alt border border-border rounded-lg hover:border-accent transition-colors"
              >
                Copy Share Link
              </button>
              {savedAt && (
                <span className="text-xs text-success">Saved at {savedAt}</span>
              )}
            </div>

            {/* Pro upsell */}
            {!isPro && (
              <ProNudge
                feature="Unlimited saved estimates and export to PDF with Pro"
                ctaLabel="Upgrade to Pro"
              />
            )}
          </section>
        </div>
      )}
    </div>
  );
}
