import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = 'https://ovqkuwbjstovqjjtrwny.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92cWt1d2Jqc3RvdnFqanRyd255Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0OTY5NzUsImV4cCI6MjA1NjA3Mjk3NX0.zEXoXzlyOyE4UvPI7yIzXKOAkjhZv0gYwA35ycwRiPw';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);