// Location landing pages. They share one template but the live site varies the
// extra section per city: 'where' = "Where We Serve" block, 'schedule' =
// "Schedule a Consultation" (Acuity), null = neither (shortest).
export const locations = [
	{ slug: 'farragut', city: 'Farragut', extra: null },
	{ slug: 'louisville', city: 'Louisville', extra: 'where' },
	{ slug: 'powell', city: 'Powell', extra: 'where' },
	{ slug: 'maryville', city: 'Maryville', extra: 'schedule' },
	{ slug: 'oak-ridge', city: 'Oak Ridge', extra: 'schedule' },
	{ slug: 'lenoir-city', city: 'Lenoir City', extra: 'schedule' },
	{ slug: 'tellico-village', city: 'Tellico Village', extra: 'schedule' }
];

export const locationMap = Object.fromEntries(locations.map((l) => [l.slug, l]));
