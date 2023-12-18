import { createClient } from '@supabase/supabase-js'
import { ENV } from "$lib/server/env";

export const supabase = createClient(
    ENV.PUBLIC_SUPABASE_URL,
    ENV.PUBLIC_SUPABASE_ANON_KEY,

);
// export const supabase = createClient('https://yplejatygdmrnsaocsfk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwbGVqYXR5Z2Rtcm5zYW9jc2ZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc5MDI2NjEsImV4cCI6MjAxMzQ3ODY2MX0.fRCaWssMQDOk1D6bl3L3MMNtcGkXZlvSNriKd9M2XYo')