<script>
	import PageHero from '$lib/components/PageHero.svelte';
	import MossCreek from '$lib/components/MossCreek.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import { servicesList, perfectClient, images } from '$lib/site.js';
	import { pageImages } from '$lib/data/imageData.js';
	import Slideshow from '$lib/components/Slideshow.svelte';
	const ch = pageImages.customHomes;
</script>

<svelte:head>
	<title>East Tennessee Home Builder - Matt Noss Custom Homes</title>
	<meta name="description" content="A full-service design and build firm in East Tennessee — preconstruction and in-build services for unique properties." />
</svelte:head>

<PageHero title="East Tennessee Home Builder" image={ch.hero} />

<!-- Intro -->
<section class="section bg-white">
	<div class="container-narrow text-center">
		<h2 class="text-3xl md:text-5xl">#1 Home Builder in East Tennessee</h2>
		<div class="divider"></div>
		<p class="mx-auto mt-6 max-w-3xl leading-relaxed">
			We build custom homes one hour around Knoxville, TN. Unique properties are our specialty,
			including lakes, rivers, mountaintops, and farms. We are experts at building in challenging
			environments.
		</p>
		<a href="/contact" class="btn btn-dark mt-7">Schedule a Consultation Today! <span class="arrow">›</span></a>
	</div>
</section>

<!-- Services intro band -->
<section class="section bg-[var(--color-cream)]">
	<div class="container-wide grid items-center gap-12 md:grid-cols-2">
		<div>
			<h2 class="text-3xl md:text-4xl">Services</h2>
			<div class="divider !mx-0"></div>
			<p class="mt-6 text-lg leading-relaxed">
				We are a full-service design and build firm focusing on flexibility and customizable options to
				fit your needs and goals. We can package a solution that suits your needs and goals without the
				added waste!
			</p>
		</div>
		<Slideshow images={ch.services} class="aspect-[4/3] w-full rounded-sm shadow-xl" alt="East Tennessee home builder" />
	</div>
</section>

<!-- Range of services -->
<section class="section bg-white">
	<div class="container-wide text-center">
		<h2 class="text-3xl md:text-4xl">A Range of Preconstruction and In-Build Services</h2>
		<div class="divider"></div>
	</div>
	<div class="container-wide mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each servicesList as s}
			<div class="border-t-2 border-[var(--color-gold)] bg-[var(--color-cream)] p-8 shadow-sm">
				<h4 class="text-xl">{s.title}</h4>
				<p class="mt-3 leading-relaxed">{s.body}</p>
			</div>
		{/each}
	</div>
</section>

<!-- Knoxville TN custom homes -->
<section class="section bg-[var(--color-cream)]">
	<div class="container-wide grid items-center gap-12 md:grid-cols-2">
		<img src={ch.services?.[1] ?? images.intro} alt="Knoxville TN custom homes" class="aspect-[4/3] w-full rounded-sm object-cover shadow-xl" />
		<div>
			<h2 class="text-3xl md:text-4xl">Knoxville TN Custom Homes</h2>
			<p class="mt-6 text-lg leading-relaxed">
				Unique properties require unique homes that will fit with the land. It also requires a unique
				builder. Our process ensures we identify those unique attributes, and design for efficiencies
				with the land, while also incorporating your unique style into the home. Our Knoxville custom
				homes are built for the way you live!
			</p>
		</div>
	</div>
</section>

<!-- Perfect client -->
<section class="section bg-white">
	<div class="container-narrow">
		<div class="text-center">
			<h2 class="text-3xl md:text-4xl">Our Perfect Client</h2>
			<div class="divider"></div>
		</div>
		<ul class="mx-auto mt-10 max-w-2xl space-y-4">
			{#each perfectClient as item}
				<li class="flex gap-3 leading-relaxed">
					<span class="mt-2 h-2 w-2 flex-none rounded-full bg-[var(--color-gold)]"></span>
					<span>{item}</span>
				</li>
			{/each}
		</ul>
	</div>
</section>

<MossCreek bg="bg-[var(--color-cream)]" />
<CtaBand />
