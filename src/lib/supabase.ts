import { createClient } from "@supabase/supabase-js";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmY3Rqa2h3bG9mZHBydnNnenJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIzMTczOTEsImV4cCI6MjAxNzg5MzM5MX0.e-dzxtVfUmKMw9WPN2ptouTGg-l3YhO_6lvsZTGFmQ8"
const SUPABASE_URL = "https://ffctjkhwlofdprvsgzrc.supabase.co";

export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
)
