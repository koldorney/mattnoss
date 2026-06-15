<script>
	import { onMount } from 'svelte';
	let { images = [], class: cls = '', interval = 4000, alt = '' } = $props();
	let i = $state(0);
	onMount(() => {
		if (images.length < 2) return;
		const t = setInterval(() => (i = (i + 1) % images.length), interval);
		return () => clearInterval(t);
	});
</script>

<div class="relative overflow-hidden {cls}">
	{#each images as src, n}
		<img
			{src}
			{alt}
			class="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 {n === i
				? 'opacity-100'
				: 'opacity-0'}"
			loading="lazy"
		/>
	{/each}
	<!-- spacer to give the container intrinsic size when images are absolute -->
	{#if images[0]}<img src={images[0]} {alt} class="invisible h-full w-full object-cover" aria-hidden="true" />{/if}
</div>
