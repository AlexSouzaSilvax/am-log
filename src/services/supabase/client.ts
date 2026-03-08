import { env } from "@/config/env";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(env.supabaseUrl, env.supabaseKey);
