const SUPABASE_URL = "https://mqivyuqsqsiutsqbqcvp.supabase.co/rest/v1/";
const SUPABASE_KEY = "COLE_AQUI_SUA_CHAVE_PUBLICA";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

console.log("Supabase conectado!");
