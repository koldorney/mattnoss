<script>
	import { builderBio, images } from '$lib/site.js';
	let { bg = 'bg-[var(--color-cream)]', showHeading = true, full = false } = $props();
	const paras = full ? builderBio : builderBio.slice(0, 4);
</script>

<section class="section {bg}">
	{#if showHeading}
		<div class="container-wide text-center">
			<h2 class="text-3xl md:text-4xl">Meet the Builder</h2>
			<p class="mt-2 font-display text-lg tracking-wide text-[var(--color-slate)]">Matt Noss, Owner</p>
		</div>
	{/if}
	<div class="container-wide mt-10 grid items-start gap-12 lg:grid-cols-5">
		<div class="lg:col-span-3">
			{#if full}
				<h3 class="subhead !text-2xl">From Aussie Farms to Knoxville Homes: My Journey</h3>
			{/if}
			<div class="space-y-4 leading-relaxed {full ? 'mt-5' : ''}">
				{#each paras as p}
					<p>{p}</p>
				{/each}
			</div>
		</div>
		<div class="lg:col-span-2">
			<img src={images.builder} alt="Matt Noss and family" class="aspect-[3/4] w-full rounded-sm object-cover shadow-xl" />
		</div>
	</div>
</section>
