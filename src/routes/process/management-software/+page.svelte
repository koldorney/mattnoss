<script>
	import PageHero from '$lib/components/PageHero.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import { images } from '$lib/site.js';
</script>

<svelte:head>
	<title>Management Software - Matt Noss Custom Homes Knoxville, TN</title>
	<meta name="description" content="Our online construction management portal is the home base for every aspect of your build — budget tracking, selections, and communication." />
</svelte:head>

<PageHero title="Management Software" image={images.difference} />

<section class="section bg-white">
	<div class="container-narrow text-center">
		<h2 class="text-3xl md:text-4xl">Your Build, All in One Place</h2>
		<div class="divider"></div>
		<p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed">
			Our online construction management portal serves as the home base for almost every aspect of the
			build — from budget tracking to selections and all the communication that goes with it. You’ll
			always know where your project stands, what decisions are coming up, and how every dollar is being
			spent.
		</p>
		<a href="/process" class="btn btn-dark mt-7">Back to Our Process <span class="arrow">›</span></a>
	</div>
</section>

<CtaBand />
