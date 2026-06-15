# Matt Noss Construction

A custom-home builder marketing site — a faithful rebuild of mattnossconstruction.com in **SvelteKit + Supabase**, deployable to **Vercel**.

## Stack

- **SvelteKit 2 / Svelte 5** (runes)
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Supabase** — stores contact / estimate-request leads
- **@sveltejs/adapter-vercel** for deployment

## Pages

| Route | Description |
| --- | --- |
| `/` | Homepage — hero, intro, core values, recent work, owner story, testimonials, service areas, CTA |
| `/services` | Services grid (custom homes, remodels, additions, decks, sunrooms) |
| `/plans` | Floor plan gallery |
| `/portfolio` | Project gallery |
| `/about` | Why Us — full owner story, mission, testimonials |
| `/process` | Step-by-step building process |
| `/contact` | Estimate-request form wired to Supabase |

All editable content lives in [`src/lib/site.js`](src/lib/site.js) so copy, contact details, and projects are easy to edit. This is a pixel-faithful clone of the original: it uses the real **Zilla Slab + Poppins** fonts, the original brand palette (slate `#282f39`, gold `#ba8431`, cream `#fefaec`), and the original site's actual photography (downloaded and web-optimized into [`static/images/`](static/images)).

## Local development

```bash
npm install
cp .env.example .env   # then fill in your Supabase values
npm run dev
```

## Supabase setup

1. Create a project at [supabase.com](https://supabase.com).
2. Run the migration in `supabase/migrations/0001_leads.sql` (SQL Editor → paste → run, or `supabase db push` with the CLI).
3. In **Project Settings → API**, copy the **Project URL** and **service_role** key into `.env`:
   ```
   SUPABASE_URL="https://YOUR-PROJECT.supabase.co"
   SUPABASE_SERVICE_ROLE_KEY="..."
   ```

The service-role key is used **server-side only** (`src/lib/server/supabase.js`) and bypasses Row Level Security. It is never exposed to the browser. The form also includes a hidden honeypot field for basic spam protection.

## Deploying to Vercel

1. Push this repo to GitHub and import it into Vercel.
2. Add `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` as Environment Variables in the Vercel project settings.
3. Deploy — the Vercel adapter is already configured.

## Viewing leads

Submitted leads land in the `public.leads` table — view them in the Supabase Table Editor. A simple authenticated admin view can be added later if desired.
