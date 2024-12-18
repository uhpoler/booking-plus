import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wlpzlmspnzkiysheidsf.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndscHpsbXNwbnpraXlzaGVpZHNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIzODkzNzEsImV4cCI6MjA0Nzk2NTM3MX0.-M2L8GYK7fNAHIpMSyBfsm6F1OrvwrNSS1fuzUG1ha4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
