<script>
	import PageHero from '$lib/components/PageHero.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import PhotoGallery from '$lib/components/PhotoGallery.svelte';
	import { portfolioProjects } from '$lib/data/imageData.js';

	const heroImg = 'https://www.mattnossconstruction.com/wp-content/uploads/2-scaled.jpg';
</script>

<svelte:head>
	<title>Knoxville Home Builder - Matt Noss Custom Homes</title>
	<meta name="description" content="A portfolio of custom homes built by Matt Noss Construction across East Tennessee and the Smoky Mountains." />
</svelte:head>

<PageHero title="Knoxville Home Builder" image={heroImg} />

<!-- Dark title band -->
<section class="bg-[var(--color-slate)] py-12 text-center">
	<h2 class="text-3xl text-white md:text-4xl">Portfolio</h2>
</section>

<section class="bg-white pt-16 pb-8">
	<div class="container-wide text-center">
		<h2 class="text-3xl md:text-4xl">#1 Knoxville Home Builder</h2>
		<div class="divider"></div>
		<p class="mx-auto mt-6 max-w-3xl leading-relaxed">
			Every home tells a story. Browse a selection of the custom homes we’ve built across East Tennessee
			and the Smoky Mountains — from rustic mountain retreats to sleek modern farmhouses.
		</p>
	</div>
</section>

{#each portfolioProjects as project, i}
	<section class="{i % 2 === 1 ? 'bg-[var(--color-cream)]' : 'bg-white'} py-28">
		<div class="container-wide">
			<div class="text-center">
				<h3 class="text-2xl md:text-3xl">{project.name}</h3>
				<div class="divider"></div>
			</div>
			<div class="mt-10">
				<PhotoGallery photos={project.photos} perPage={3} alt={project.name} />
			</div>
		</div>
	</section>
{/each}

<CtaBand />
