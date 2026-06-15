import { fail, redirect } from '@sveltejs/kit';
import { supabaseAdmin } from '$lib/server/supabase.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const actions = {
	default: async ({ request }) => {
		const form = await request.formData();

		// Honeypot — bots fill hidden fields; humans don't.
		if (form.get('company_website')) {
			throw redirect(303, '/thank-you');
		}

		const first = String(form.get('first_name') ?? '').trim();
		const last = String(form.get('last_name') ?? '').trim();

		const data = {
			first_name: first,
			last_name: last,
			name: `${first} ${last}`.trim(),
			email: String(form.get('email') ?? '').trim(),
			phone: String(form.get('phone') ?? '').trim(),
			project_type: String(form.get('project_type') ?? '').trim(),
			referral_source: String(form.get('referral_source') ?? '').trim(),
			message: String(form.get('message') ?? '').trim()
		};

		const errors = {};
		if (!data.name) errors.name = 'Please enter your name.';
		if (!data.email) errors.email = 'Please enter your email.';
		else if (!EMAIL_RE.test(data.email)) errors.email = 'Please enter a valid email.';
		if (!data.project_type) errors.project_type = 'Please select what you need an estimate for.';

		if (Object.keys(errors).length) {
			return fail(400, { errors, values: data });
		}

		if (!supabaseAdmin) {
			console.error('Supabase is not configured — set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.');
			return fail(500, {
				values: data,
				formError: 'Our form isn’t connected yet. Please call us at (865) 696-6535 and we’ll help right away.'
			});
		}

		const { error } = await supabaseAdmin.from('leads').insert({
			name: data.name,
			email: data.email,
			phone: data.phone || null,
			project_type: data.project_type,
			referral_source: data.referral_source || null,
			message: data.message || null,
			source: 'website_contact_form'
		});

		if (error) {
			console.error('Failed to insert lead:', error);
			return fail(500, {
				values: data,
				formError: 'Something went wrong saving your request. Please try again or call (865) 696-6535.'
			});
		}

		throw redirect(303, '/thank-you');
	}
};
