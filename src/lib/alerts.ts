import { supabase } from "@/lib/supabase";

/**
 * Subscribe an email to price alerts for the given tool slugs.
 * Upserts: if the email already exists, merges new slugs with existing ones.
 * Returns true on success, false on failure.
 * Gracefully degrades if Supabase is not configured.
 */
export async function subscribeToAlerts(
  email: string,
  toolSlugs: string[]
): Promise<boolean> {
  try {
    // Check if subscription already exists for this email
    const { data: existing, error: fetchError } = await supabase
      .from("price_alerts")
      .select("id, tool_slugs")
      .eq("email", email)
      .maybeSingle();

    if (fetchError) {
      console.warn("[alerts] Supabase fetch failed:", fetchError.message);
      return false;
    }

    if (existing) {
      // Merge new slugs with existing, deduplicate
      const merged = Array.from(
        new Set([...(existing.tool_slugs as string[]), ...toolSlugs])
      );
      const { error: updateError } = await supabase
        .from("price_alerts")
        .update({ tool_slugs: merged, updated_at: new Date().toISOString() })
        .eq("id", existing.id);

      if (updateError) {
        console.warn("[alerts] Supabase update failed:", updateError.message);
        return false;
      }
    } else {
      // Insert new row
      const { error: insertError } = await supabase
        .from("price_alerts")
        .insert({
          email,
          tool_slugs: toolSlugs,
          created_at: new Date().toISOString(),
        });

      if (insertError) {
        console.warn("[alerts] Supabase insert failed:", insertError.message);
        return false;
      }
    }

    return true;
  } catch (err) {
    console.warn("[alerts] subscribeToAlerts error:", err);
    return false;
  }
}
