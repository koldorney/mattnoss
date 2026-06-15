<script>
	import PageHero from '$lib/components/PageHero.svelte';
	import MossCreek from '$lib/components/MossCreek.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import { plans as allPlans } from '$lib/data/plans.js';
	import { pageImages } from '$lib/data/imageData.js';

	// The live /plans index lists 7 plans (Meet Me On The Mountain has a detail
	// page + nav entry but isn't shown in the index grid).
	const plans = allPlans.filter((p) => p.slug !== 'meet-me-on-the-mountain');
</script>

<svelte:head>
	<title>New Home Construction Knoxville, TN - Matt Noss Custom Homes</title>
	<meta name="description" content="Explore our collection of custom home plans — from mid century modern to mountain farmhouse, every plan is fully customizable." />
</svelte:head>

<PageHero title="Custom Home Plans" image={pageImages.plansIndex.hero} />

<section class="section bg-white">
	<div class="container-wide text-center">
		<h2 class="text-3xl md:text-5xl">New Home Construction Plans in Knoxville, TN</h2>
		<div class="divider"></div>
		<p class="mx-auto mt-6 max-w-3xl leading-relaxed">
			The following plans are a collection of popular custom homes we have done over the years that can
			show you some plans and pictures of a finished product at a rough price point. Every home is unique
			to the site and can change based on the site, budgets, and personal tastes! If any of them take
			your eye, give us a call and we may even be able to schedule a visit to see the home. Enjoy!
		</p>
	</div>

	<div class="container-wide mt-12 grid gap-8 md:grid-cols-2">
		{#each plans as plan}
			<article class="flex flex-col overflow-hidden rounded-sm border border-[var(--color-line)] bg-white shadow-sm transition hover:shadow-xl">
				<a href="/plans/{plan.slug}" class="block aspect-[16/10] overflow-hidden">
					<img src={plan.cardImage} alt={plan.name} class="h-full w-full object-cover transition duration-700 hover:scale-105" loading="lazy" />
				</a>
				<div class="flex flex-1 flex-col p-7 text-center">
					<h3 class="text-2xl">{plan.name}</h3>
					<p class="mt-3 flex-1 leading-relaxed">{plan.card}</p>
					<div class="mt-6 flex flex-wrap justify-center gap-3">
						<a href="/plans/{plan.slug}" class="btn btn-dark">View Plan <span class="arrow">›</span></a>
						<a href="/contact" class="btn btn-outline text-[var(--color-slate)]">Inquire</a>
					</div>
				</div>
			</article>
		{/each}
	</div>
</section>

<MossCreek bg="bg-[var(--color-cream)]" />
<CtaBand />
