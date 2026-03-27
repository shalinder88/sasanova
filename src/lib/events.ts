"use client";

import { supabase } from "@/lib/supabase";

export type BuyerIntentEvent =
  | "profile_view"
  | "compare_view"
  | "alternatives_view"
  | "pricing_view"
  | "shortlist_add"
  | "shortlist_export"
  | "cta_click"
  | "search"
  | "filter_use"
  | "feature_expand";

function getSessionId(): string {
  const key = "sasanova_session_id";
  let id = sessionStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem(key, id);
  }
  return id;
}

const VALID_EVENTS = new Set<BuyerIntentEvent>([
  "profile_view", "compare_view", "alternatives_view", "pricing_view",
  "shortlist_add", "shortlist_export", "cta_click", "search",
  "filter_use", "feature_expand",
]);

export function logEvent(
  eventType: BuyerIntentEvent,
  metadata?: Record<string, unknown>
): void {
  // Validate event type at runtime (guards against dynamic invocation)
  if (!VALID_EVENTS.has(eventType)) return;
  // Cap metadata size to prevent oversized payloads
  const safeMetadata = metadata ? JSON.parse(JSON.stringify(metadata).slice(0, 2000)) : {};
  try {
    const sessionId = getSessionId();
    void Promise.resolve(
      supabase.from("buyer_intent_events").insert({
        session_id: sessionId,
        event_type: eventType,
        metadata: safeMetadata,
        created_at: new Date().toISOString(),
      })
    ).catch(() => {
      // silently ignore logging failures
    });
  } catch {
    // sessionStorage may be unavailable (SSR, private browsing)
  }
}
