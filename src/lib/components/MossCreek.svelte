<script>
	import { images, mossCreekText } from '$lib/site.js';
	let { bg = 'bg-white' } = $props();
</script>

<section class="section {bg}">
	<div class="container-narrow text-center">
		<h2 class="text-3xl md:text-4xl">Premier Custom Home Builder For</h2>
		<div class="divider"></div>
		<img src={images.mossCreek} alt="MossCreek" class="mx-auto mt-8 h-20 w-auto" />
		<p class="mx-auto mt-6 max-w-2xl leading-relaxed">{mossCreekText}</p>
	</div>
</section>
