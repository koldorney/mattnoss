<script>
	import PageHero from '$lib/components/PageHero.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import PhotoGallery from '$lib/components/PhotoGallery.svelte';
	import { plans } from '$lib/data/plans.js';
	import { planImages } from '$lib/data/imageData.js';

	let { data } = $props();
	// Merge text (plans.js) with the exact image set captured from the live site.
	const plan = $derived({ ...data.plan, ...planImages[data.plan.slug] });

	// Per-plan gallery sizing so each plan's vertical rhythm matches the
	// original (plans differ in description length, elevations, floor plans).
	// Compact galleries (paginated) — the auto-sizing hero provides the height,
	// so content stays as compact as the original's.
	const perPage = 3;
</script>

<svelte:head>
	<title>{plan.name} Custom Home Plan - Matt Noss Custom Homes</title>
	<meta name="description" content={plan.description[0]} />
</svelte:head>

<PageHero title={plan.title} image={plan.hero} />

{#if plan.subtitle}
	<section class="bg-[var(--color-slate)] py-10 text-center">
		<h2 class="text-2xl text-white md:text-3xl">{plan.subtitle}</h2>
	</section>
{/if}

<!-- Description + Square Footage -->
<section class="section bg-white">
	<div class="container-wide grid gap-10 lg:grid-cols-3">
		<div class="space-y-4 leading-relaxed lg:col-span-2">
			{#each plan.description as p}
				<p>{p}</p>
			{/each}
		</div>
		<aside class="h-fit border-t-4 border-[var(--color-gold)] bg-[var(--color-cream)] p-7 shadow-sm">
			<h4 class="text-xl">Square Footage</h4>
			<dl class="mt-4 space-y-2">
				{#each plan.specs as spec}
					{@const [k, v] = spec.split(': ')}
					<div class="flex justify-between gap-4 border-b border-[var(--color-line)] pb-2 text-sm">
						<dt>{k}</dt>
						<dd class="font-semibold text-[var(--color-gold)]">{v}</dd>
					</div>
				{/each}
			</dl>
		</aside>
	</div>
</section>

<!-- Renderings (modern home) -->
{#if plan.renderings?.length}
	<section class="section bg-[var(--color-cream)]">
		<div class="container-wide text-center">
			<h2 class="text-3xl md:text-4xl">Front &amp; Back Rendering</h2>
			<div class="divider"></div>
		</div>
		<div class="container-wide mt-10 grid gap-6 md:grid-cols-2">
			{#each plan.renderings as r}
				<img src={r} alt="{plan.name} rendering" class="w-full rounded-sm object-cover shadow-md" loading="lazy" />
			{/each}
		</div>
	</section>
{/if}

<!-- Photos -->
{#if plan.photos?.length}
	<section class="section bg-white">
		<div class="container-wide text-center">
			<h2 class="text-3xl md:text-4xl">Photos</h2>
			<div class="divider"></div>
		</div>
		<div class="container-wide mt-10">
			<PhotoGallery photos={plan.photos} {perPage} alt={plan.name} />
		</div>
	</section>
{/if}

<!-- Elevations -->
{#if plan.elevations?.length}
	<section class="section bg-[var(--color-cream)]">
		<div class="container-wide text-center">
			<h2 class="text-3xl md:text-4xl">Elevations</h2>
			<div class="divider"></div>
		</div>
		<div class="container-wide mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each plan.elevations as e}
				<img src={e} alt="{plan.name} elevation" class="w-full rounded-sm bg-white p-2 shadow-sm" loading="lazy" />
			{/each}
		</div>
	</section>
{/if}

<!-- Plans / floor plans -->
{#if plan.floorplans?.length}
	<section class="section bg-white">
		<div class="container-wide text-center">
			<h2 class="text-3xl md:text-4xl">Plans</h2>
			<div class="divider"></div>
		</div>
		<div class="container-wide mt-10 grid gap-8 {plan.floorplans.length > 1 ? 'md:grid-cols-2' : 'md:grid-cols-1'}">
			{#each plan.floorplans as fp}
				<figure class="text-center">
					<img src={fp.src} alt="{plan.name} {fp.label}" class="mx-auto w-full max-w-xl rounded-sm bg-white p-2 shadow-sm" loading="lazy" />
					<figcaption class="mt-3 font-display text-lg tracking-wide text-[var(--color-slate)] uppercase">{fp.label}</figcaption>
				</figure>
			{/each}
		</div>
	</section>
{/if}

<!-- Find the perfect home -->
<section class="relative overflow-hidden">
	<img src={plan.hero} alt="" class="absolute inset-0 h-full w-full object-cover" />
	<div class="absolute inset-0 bg-[var(--color-slate)]/85"></div>
	<div class="relative z-10 py-16 text-center text-white">
		<h2 class="text-3xl text-white md:text-4xl">Find The Perfect Home</h2>
		<div class="divider"></div>
		<div class="mt-8 flex flex-wrap justify-center gap-6 px-6">
			{#each plans.filter((p) => p.slug !== plan.slug).slice(0, 4) as other}
				<a href="/plans/{other.slug}" class="font-display text-lg tracking-wide text-white uppercase underline-offset-4 hover:text-[var(--color-gold)] hover:underline">
					{other.name}
				</a>
			{/each}
		</div>
		<a href="/plans" class="btn btn-gold mt-8">View All Plans <span class="arrow">›</span></a>
	</div>
</section>

<CtaBand />
