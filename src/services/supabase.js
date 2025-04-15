import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://caarfghzonuxxzvbwcsv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhYXJmZ2h6b251eHh6dmJ3Y3N2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3MDE4ODUsImV4cCI6MjA2MDI3Nzg4NX0.MnFU_faU-Zh9WOGPxq3m6zTBFWd2Mv1Z7GkKBXhcMA8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
