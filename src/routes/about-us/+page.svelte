<script>
	import PageHero from '$lib/components/PageHero.svelte';
	import MossCreek from '$lib/components/MossCreek.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import { brandValues } from '$lib/site.js';
	import { pageImages } from '$lib/data/imageData.js';
	import Slideshow from '$lib/components/Slideshow.svelte';

	const a = pageImages.aboutUs;
	const differenceShots = [a.difference, ...(a.differenceGallery || [])].filter(Boolean);
	const img = {
		hero: a.hero,
		mission: a.mission,
		difference: a.difference,
		vision: a.vision,
		values: a.hero
	};
</script>

<svelte:head>
	<title>About Our Custom Homes in Knoxville - Matt Noss Custom Homes</title>
	<meta name="description" content="Knoxville's trusted custom home builder. Learn about our mission, vision, and brand values." />
</svelte:head>

<PageHero title="Knoxville’s Trusted Custom Home Builder" image={img.hero} />

<!-- Intro -->
<section class="section bg-white">
	<div class="container-narrow text-center">
		<h2 class="text-3xl md:text-5xl">Custom Homes in Knoxville, TN</h2>
		<div class="divider"></div>
		<p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed">
			Learn more about why Matt Noss Custom Homes has been Knoxville’s trusted choice for new construction
			and custom-built homes in the Greater Knoxville Area! We strongly believe in communication,
			collaboration, trust, and helpfulness when it comes to building custom homes in Knoxville!
		</p>
	</div>
</section>

<!-- Mission — image left, dark-slate box right -->
<section class="grid items-stretch lg:grid-cols-2">
	<div class="min-h-[460px] bg-cover bg-center" style="background-image:url('{img.mission}')"></div>
	<div class="flex flex-col justify-center bg-[var(--color-slate)] px-8 py-24 text-white lg:px-14">
		<div class="max-w-xl">
			<h2 class="text-3xl text-white md:text-4xl">Our Mission Statement</h2>
			<div class="divider !mx-0"></div>
			<p class="mt-6 leading-relaxed text-white/85">
				Your custom home is unique and deserves the trusted guidance of an experienced builder who can
				bring your vision to life. Our mission is to provide the straightforward, collaborative, and
				seamless construction solutions you need to transform your custom dreams into a high-end reality.
			</p>
		</div>
	</div>
</section>

<!-- The Matt Noss Difference — tan box left, image right -->
<section class="grid items-stretch lg:grid-cols-2">
	<div class="order-2 flex flex-col justify-center bg-[var(--color-cream)] px-8 py-24 lg:order-1 lg:px-14">
		<div class="max-w-xl">
			<h3 class="text-2xl md:text-3xl">The Matt Noss Difference</h3>
			<div class="divider !mx-0"></div>
			<p class="mt-6 leading-relaxed">
				At Matt Noss Custom Homes, we understand your investment and are committed to building the home
				of your dreams, making sure that you receive the most quality for your money.
				<span class="mt-3 block font-semibold text-[var(--color-gold)] italic">“Our goal is to create quality projects the way our customers want them.”</span>
			</p>
			<p class="mt-4 leading-relaxed">
				Matt Noss Custom Homes specializes in custom homes, design services, and new construction
				projects. In addition, we are proud to provide quality renovations and home remodeling services,
				including additions for our residential and commercial clients in Knoxville and surrounding areas.
				<a href="/plans" class="font-semibold text-[var(--color-gold)] underline-offset-4 hover:underline">See our plans!</a>
			</p>
		</div>
	</div>
	<Slideshow images={differenceShots} class="order-1 min-h-[460px] lg:order-2" alt="The Matt Noss difference" />
</section>

<!-- Vision — image left, dark-slate box right -->
<section class="grid items-stretch lg:grid-cols-2">
	<div class="min-h-[460px] bg-cover bg-center" style="background-image:url('{img.vision}')"></div>
	<div class="flex flex-col justify-center bg-[var(--color-slate)] px-8 py-24 text-white lg:px-14">
		<div class="max-w-xl">
			<h2 class="text-3xl text-white md:text-4xl">Our Vision Statement</h2>
			<div class="divider !mx-0"></div>
			<p class="mt-6 leading-relaxed text-white/85">
				To elevate the modern standards of high-performance homes and be the most radically transparent,
				customer-focused, and quality-driven custom home builders in Knoxville and Tennessee.
			</p>
		</div>
	</div>
</section>

<!-- Brand Values — tan box left, image right -->
<section class="grid items-stretch lg:grid-cols-2">
	<div class="order-2 flex flex-col justify-center bg-[var(--color-cream)] px-8 py-24 lg:order-1 lg:px-14">
		<div class="max-w-xl">
			<h3 class="text-2xl md:text-3xl">Our Brand Values</h3>
			<div class="divider !mx-0"></div>
			<dl class="mt-6 space-y-5">
				{#each brandValues as v}
					<div>
						<dt class="font-display text-lg tracking-wide text-[var(--color-gold)] uppercase">{v.title}</dt>
						<dd class="mt-1 leading-relaxed">{v.body}</dd>
					</div>
				{/each}
			</dl>
		</div>
	</div>
	<div class="order-1 min-h-[460px] bg-cover bg-center lg:order-2" style="background-image:url('{img.values}')"></div>
</section>

<MossCreek bg="bg-white" />
<CtaBand />
