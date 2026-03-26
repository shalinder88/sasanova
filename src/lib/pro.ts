/**
 * Pro tier state management (localStorage-based for now, Supabase later)
 */

const STORAGE_KEY = "sasanova_pro";

export interface ProData {
  active: boolean;
  type: "trial" | "paid";
  startedAt: string;
  expiresAt: string;
}

export interface ProStatus {
  active: boolean;
  type: "trial" | "paid" | "none";
  daysLeft: number;
}

function getStoredData(): ProData | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ProData;
  } catch {
    return null;
  }
}

/** Check if user currently has active Pro access */
export function isProUser(): boolean {
  const data = getStoredData();
  if (!data) return false;
  return data.active && new Date(data.expiresAt) > new Date();
}

/** Start a 14-day free trial */
export function startFreeTrial(): void {
  const trial: ProData = {
    active: true,
    type: "trial",
    startedAt: new Date().toISOString(),
    expiresAt: new Date(
      Date.now() + 14 * 24 * 60 * 60 * 1000
    ).toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(trial));
}

/** Get current Pro status with days remaining */
export function getProStatus(): ProStatus {
  const data = getStoredData();
  if (!data || !data.active) {
    return { active: false, type: "none", daysLeft: 0 };
  }

  const now = new Date();
  const expires = new Date(data.expiresAt);
  const msLeft = expires.getTime() - now.getTime();

  if (msLeft <= 0) {
    return { active: false, type: "none", daysLeft: 0 };
  }

  const daysLeft = Math.ceil(msLeft / (24 * 60 * 60 * 1000));
  return { active: true, type: data.type, daysLeft };
}

/** Clear Pro status (for testing or cancellation) */
export function clearProStatus(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}

/* ---------------------------------------------------------------
   FREE TIER LIMITS
   --------------------------------------------------------------- */

export const FREE_LIMITS = {
  calculatorScenarios: 3,
  alertTools: 3,
  playgroundTools: 2,
  savedComparisons: 3,
} as const;

export const PRO_LIMITS = {
  calculatorScenarios: Infinity,
  alertTools: Infinity,
  playgroundTools: 4,
  savedComparisons: Infinity,
} as const;

/** Get the appropriate limit based on Pro status */
export function getLimit(
  feature: keyof typeof FREE_LIMITS
): number {
  return isProUser() ? PRO_LIMITS[feature] : FREE_LIMITS[feature];
}
