import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

// Create a single supabase client for interacting with your database
const client = createClient<Database>(
	'https://wwceofzfflojxqhkckeu.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3Y2VvZnpmZmxvanhxaGtja2V1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIyNDEyOTAsImV4cCI6MTk4NzgxNzI5MH0.QPduJlif7Et_kZh6jd_iMsUjj2hXzng75FP-_5W2Blw'
);

export default client;
