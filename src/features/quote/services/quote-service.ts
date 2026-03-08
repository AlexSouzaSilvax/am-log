import { supabase } from "@/services/supabase/client";

export async function fetchQuotes() {
  const { data, error } = await supabase.from("quotes").select("*");

  if (error) {
    throw error;
  }

  return data;
}
