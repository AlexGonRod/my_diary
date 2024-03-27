

interface ImportMetaEnv {
    readonly SUPABASE_URL: string;
    readonly SUPABASE_ANON_KEY: string;
    readonly RAPID_API_KEY: string;
    readonly RAPID_API_HOST: string;

}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
