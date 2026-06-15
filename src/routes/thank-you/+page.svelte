<script>
	import { company } from '$lib/site.js';
	import { pageImages } from '$lib/data/imageData.js';
</script>

<svelte:head>
	<title>Thank You | Matt Noss Construction</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-24">
	<img src={pageImages.thankYou} alt="" class="absolute inset-0 h-full w-full object-cover" />
	<div class="absolute inset-0 bg-[var(--color-slate)]/85"></div>
	<div class="relative z-10 px-6 text-center text-white">
		<h1 class="text-4xl text-white md:text-5xl">Thank You</h1>
		<div class="divider"></div>
		<p class="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/85">
			Your message has been received. We look forward to working with you on your dream project and will
			be in touch shortly. For anything urgent, call
			<a href={company.phoneHref} class="font-semibold text-[var(--color-gold)]">{company.phone}</a>.
		</p>
		<a href="/" class="btn btn-gold mt-8">Back to Home <span class="arrow">›</span></a>
	</div>
</section>
