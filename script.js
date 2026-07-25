const SUPABASE_URL = "https://mqivyuqsqsiutsqbqcvp.supabase.co/rest/v1/";
const SUPABASE_KEY = "sb_publishable_AgUoymj4GHEyn9VCwUuYkA_y4lOkzxM";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

console.log("Supabase conectado!");
