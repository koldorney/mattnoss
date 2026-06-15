import { error } from '@sveltejs/kit';
import { locationMap } from '$lib/data/locations.js';

export function load({ params }) {
	const loc = locationMap[params.location];
	if (!loc) throw error(404, 'Page not found');
	return { loc };
}
