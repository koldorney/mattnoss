-- Leads captured from the website contact / estimate-request form.
create table if not exists public.leads (
	id uuid primary key default gen_random_uuid(),
	created_at timestamptz not null default now(),
	name text not null,
	email text not null,
	phone text,
	project_type text not null,
	referral_source text,
	message text,
	source text default 'website_contact_form',
	handled boolean not null default false
);

-- Enable Row Level Security. The website writes using the service-role key,
-- which bypasses RLS, so no public policies are needed. This keeps the table
-- locked down to anon/public clients by default.
alter table public.leads enable row level security;

create index if not exists leads_created_at_idx on public.leads (created_at desc);
