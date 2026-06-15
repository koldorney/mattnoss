<script>
	import BuilderStory from '$lib/components/BuilderStory.svelte';
	import TestimonialSlider from '$lib/components/TestimonialSlider.svelte';
	import MossCreek from '$lib/components/MossCreek.svelte';
	import { onMount, tick } from 'svelte';
	import { page } from '$app/stores';
	import { images, serviceAreas, projects } from '$lib/site.js';
	import { locationImages } from '$lib/data/imageData.js';
	import { targetHeights } from '$lib/data/heights.js';

	let { data } = $props();
	const city = $derived(data.loc.city);
	const extra = $derived(data.loc.extra);
	const img = $derived(locationImages[data.loc.slug] || {});

	// Auto-size hero so total page height matches the original (big hero + aligned height).
	let heroH = $state(null);
	let heroEl;
	async function sizeHero() {
		const target = targetHeights[$page.url.pathname];
		if (!target) return;
		heroH = null;
		await tick();
		const rest = document.documentElement.scrollHeight - (heroEl?.offsetHeight || 0);
		heroH = Math.max(620, Math.round(target - rest));
	}
	onMount(() => {
		sizeHero();
		if (document.fonts?.ready) document.fonts.ready.then(sizeHero);
		const t = setTimeout(sizeHero, 500);
		const r = () => sizeHero();
		window.addEventListener('resize', r);
		return () => { clearTimeout(t); window.removeEventListener('resize', r); };
	});
	$effect(() => { $page.url.pathname; sizeHero(); });
</script>

<svelte:head>
	<title>Custom Home Builder in {city}, TN - Matt Noss Construction</title>
	<meta name="description" content="Matt Noss Custom Homes is the top custom home builder in {city}, TN — building beautiful, high-quality custom homes." />
</svelte:head>

<!-- HERO -->
<section
	bind:this={heroEl}
	class="relative flex items-center overflow-hidden"
	style={heroH ? `height:${heroH}px` : 'min-height:82vh'}
>
	<img src={img.hero ?? images.intro} alt="" class="absolute inset-0 h-full w-full object-cover" />
	<div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25"></div>
	<div class="container-wide relative z-10 max-w-3xl text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.85)]">
		<h1 class="text-4xl leading-[1.1] text-white sm:text-5xl">Custom Home Builder in {city}, TN</h1>
		<p class="mt-5 text-2xl font-light italic" style="font-family:var(--font-serif)">
			Build the home of your dreams in {city}, Tennessee.
		</p>
		<div class="mt-8 flex flex-wrap gap-4">
			<a href="/contact" class="btn btn-light">Let’s Get Started! <span class="arrow">›</span></a>
			<a href="/contact" class="btn btn-light">Schedule a Consultation <span class="arrow">›</span></a>
		</div>
	</div>
</section>

<!-- INTRO -->
<section class="section bg-[var(--color-cream)]">
	<div class="container-wide text-center">
		<h2 class="text-3xl md:text-5xl">#1 Home Builder in {city}, TN</h2>
		<p class="subhead mt-3">Quality homes on your budget.</p>
		<p class="mx-auto mt-6 max-w-3xl text-lg leading-relaxed">
			Matt Noss Custom Homes is proud to be the top custom home builder in {city} and the surrounding
			areas. We provide custom home building services, including Custom Home Building, Kitchen Remodeling,
			Bathroom Remodeling, Home Additions, Renovations, Decks, Sun Rooms, Outdoor Kitchens &amp; More. We
			specialize in everything from custom modern homes to rustic homes and everything in between.
		</p>
	</div>
</section>

<!-- WHAT MAKES US STAND OUT -->
<section class="section bg-white">
	<div class="container-wide grid items-center gap-12 md:grid-cols-2">
		<div>
			<h2 class="text-3xl md:text-4xl">What Makes Us Stand Out</h2>
			<p class="subhead mt-2">{city} Custom Home Builders</p>
			<p class="mt-6 text-lg leading-relaxed">
				Minimal regulation, skill, and experience in the residential construction industry make
				building a custom dream home a risky endeavor for families to pursue. However, we’re on a
				mission to change that.
			</p>
			<p class="mt-4 text-lg leading-relaxed">
				At Matt Noss Custom Homes, we have spent nearly 20 years developing the experience and knowledge
				needed to build beautiful, functional homes and providing unparalleled service to our clients.
			</p>
			<a href="/contact" class="btn btn-dark mt-7">Learn More <span class="arrow">›</span></a>
		</div>
		<img src={img.standOut ?? images.standOut} alt="{city} custom home builders" class="aspect-[4/3] w-full rounded-sm object-cover shadow-xl" />
	</div>
</section>

<!-- DELIVERING -->
<section class="section bg-[var(--color-cream)]">
	<div class="container-wide grid items-center gap-12 md:grid-cols-2">
		<img src={img.delivering ?? images.difference} alt="Custom homes East TN" class="aspect-[4/3] w-full rounded-sm object-cover shadow-xl" />
		<div>
			<h2 class="text-3xl md:text-4xl">Delivering High-Quality Custom Homes to East TN</h2>
			<div class="mt-6 space-y-4 text-lg leading-relaxed">
				<p><span class="font-semibold text-[var(--color-gold)]">Curious &amp; Innovative</span> — we stay up to date on emerging trends to improve our skills and options, including eco-friendly alternatives, to create results that meet your needs and vision.</p>
				<p><span class="font-semibold text-[var(--color-gold)]">Team-Focused</span> — we believe that surrounding ourselves with the experts in their trade is the key to honoring our mission.</p>
				<p><span class="font-semibold text-[var(--color-gold)]">Flexible &amp; Personalized</span> — we understand that building a true custom home means the process won’t look identical each time. So, we maintain constant communication to deliver a bespoke experience that best suits you.</p>
			</div>
		</div>
	</div>
</section>

<!-- RECENT WORK (city-specific images) -->
<section class="section bg-white">
	<div class="container-wide text-center">
		<h2 class="text-3xl md:text-4xl">Recent Work</h2>
		<div class="divider"></div>
	</div>
	<div class="container-wide mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
		{#each projects as project, i}
			<a href="/portfolio" class="group block text-center">
				<div class="aspect-[4/3] overflow-hidden rounded-sm shadow-md">
					<img
						src={img.recentWork?.[i] ?? project.image}
						alt={project.name}
						class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
					/>
				</div>
				<h3 class="mt-4 text-base leading-snug">{project.name}</h3>
			</a>
		{/each}
	</div>
</section>

<!-- Per-city extra section: "Where We Serve" -->
{#if extra === 'where'}
	<section class="section bg-[var(--color-cream)]">
		<div class="container-wide text-center">
			<h2 class="text-3xl md:text-4xl">Where We Serve</h2>
			<div class="divider"></div>
			<div class="mt-12 grid grid-cols-2 gap-y-6 md:grid-cols-4">
				<p class="font-display text-base font-medium tracking-wide text-[var(--color-slate)] uppercase">Knoxville, TN</p>
				{#each serviceAreas as area}
					<p class="font-display text-base font-medium tracking-wide text-[var(--color-slate)] uppercase">{area}</p>
				{/each}
			</div>
		</div>
	</section>
{/if}

<!-- Per-city extra section: "Schedule a Consultation" (live Acuity scheduler) -->
{#if extra === 'schedule'}
	<section class="section bg-[var(--color-slate)] text-white">
		<div class="container-wide text-center">
			<h2 class="text-3xl text-white md:text-4xl">Schedule a Consultation</h2>
			<div class="divider"></div>
			<div class="mx-auto mt-8 max-w-4xl overflow-hidden rounded-sm bg-white shadow-lg">
				<iframe
					title="Schedule a consultation with Matt Noss"
					src="https://app.acuityscheduling.com/schedule.php?owner=28947335"
					width="100%"
					height="900"
					frameborder="0"
				></iframe>
			</div>
		</div>
	</section>
{/if}

<BuilderStory bg="bg-[var(--color-cream)]" full={true} />
<TestimonialSlider bg={img.testimonialsBg ?? images.testimonialsBg} />
<MossCreek bg="bg-white" />
