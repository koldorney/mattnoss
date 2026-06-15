import { error } from '@sveltejs/kit';
import { planMap } from '$lib/data/plans.js';

export function load({ params }) {
	const plan = planMap[params.slug];
	if (!plan) throw error(404, 'Plan not found');
	return { plan };
}
