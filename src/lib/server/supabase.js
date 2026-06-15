import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/private';

// Server-only Supabase client using the service-role key. Never import this
// into client-side code — the service role key bypasses Row Level Security.
// Using dynamic env so the app builds even before the vars are configured;
// the client is null until SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY are set.
export const supabaseAdmin =
	env.SUPABASE_URL && env.SUPABASE_SERVICE_ROLE_KEY
		? createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
				auth: { persistSession: false }
			})
		: null;
