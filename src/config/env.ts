function getEnv(name: string): string {
  const value = import.meta.env[name];

  if (!value) {
    throw new Error(`❌ Missing environment variable: ${name}`);
  }

  return value;
}

export const env = {
  supabaseUrl: getEnv("VITE_SUPABASE_URL"),
  supabaseKey: getEnv("VITE_SUPABASE_ANON_KEY"),
  googleMapsKey: getEnv("VITE_GOOGLE_MAPS_KEY"),
};
