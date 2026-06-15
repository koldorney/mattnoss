<script>
	import PageHero from '$lib/components/PageHero.svelte';
	import MossCreek from '$lib/components/MossCreek.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import { coreValues } from '$lib/site.js';
	import { pageImages } from '$lib/data/imageData.js';
	const wu = pageImages.whyUs;
</script>

<svelte:head>
	<title>Why You Should Choose Matt Noss Custom Homes Knoxville</title>
	<meta name="description" content="Matt Noss Custom Homes has been helping Knoxville families build beautiful custom homes for over 20 years." />
</svelte:head>

<PageHero title="Knoxville’s Premier Custom Home Builder" image={wu.hero} />

<section class="section bg-white">
	<div class="container-narrow text-center">
		<h2 class="text-3xl md:text-5xl">Custom Homes in Knoxville, TN</h2>
		<div class="divider"></div>
		<p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed">
			Matt Noss Custom Homes has been helping Knoxville families build beautiful custom homes for over 20
			years. We strongly believe in staying curious, innovative, team-focused, flexible, and
			personalized. Contact us today!
		</p>
	</div>
</section>

<section class="section bg-[var(--color-cream)]">
	<div class="container-wide grid items-center gap-12 md:grid-cols-2">
		<div>
			<h2 class="text-3xl md:text-4xl">What Makes Us Stand Out</h2>
			<p class="subhead mt-2">Knoxville Custom Home Builders</p>
			<p class="mt-6 text-lg leading-relaxed">
				Minimal regulation, skill, and experience in the residential construction industry make
				building a custom dream home a risky endeavor for families to pursue. However, we’re on a
				mission to change that.
			</p>
			<p class="mt-4 text-lg leading-relaxed">
				At Matt Noss Custom Homes, we have spent nearly 20 years developing the experience and knowledge
				needed to build beautiful, functional homes and providing unparalleled service to our clients.
			</p>
		</div>
		<img src={wu.standOut} alt="Custom home builders Knoxville TN" class="aspect-[4/3] w-full rounded-sm object-cover shadow-xl" />
	</div>
</section>

<section class="section bg-white">
	<div class="container-wide grid items-center gap-12 md:grid-cols-2">
		<img src={wu.delivering} alt="Custom homes Knoxville TN" class="aspect-[4/3] w-full rounded-sm object-cover shadow-xl" />
		<div>
			<h2 class="text-3xl md:text-4xl">Delivering High-Quality Custom Homes to Knoxville</h2>
			<div class="mt-8 space-y-6">
				{#each coreValues as v}
					<div>
						<h4 class="text-xl text-[var(--color-gold)]">{v.title}</h4>
						<p class="mt-1 leading-relaxed">{v.body}</p>
					</div>
				{/each}
				<p class="leading-relaxed">
					Simply put, expertise and communication are at the heart of what we do. Our goal is to build a
					home you and your family can thrive in for years to come.
				</p>
			</div>
		</div>
	</div>
</section>

<MossCreek bg="bg-[var(--color-cream)]" />
<CtaBand />
