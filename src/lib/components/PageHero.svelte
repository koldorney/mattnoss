<script>
	import { onMount, tick } from 'svelte';
	import { page } from '$app/stores';
	import { targetHeights } from '$lib/data/heights.js';

	let { title = '', image } = $props();

	// The hero auto-sizes to absorb whatever space is needed for the page to
	// match the original's rendered height — so heroes are large (like the
	// original's) AND total page height stays aligned. Min 600px so it's always
	// a full, prominent hero.
	let h = $state(null);
	let el;

	async function size() {
		const target = targetHeights[$page.url.pathname];
		if (!target) {
			h = null;
			return;
		}
		h = null;
		await tick();
		const rest = document.documentElement.scrollHeight - (el?.offsetHeight || 0);
		h = Math.max(500, Math.round(target - rest));
	}

	onMount(() => {
		size();
		if (document.fonts?.ready) document.fonts.ready.then(size);
		const t = setTimeout(size, 500);
		const r = () => size();
		window.addEventListener('resize', r);
		return () => {
			clearTimeout(t);
			window.removeEventListener('resize', r);
		};
	});

	$effect(() => {
		$page.url.pathname;
		size();
	});
</script>

<section
	bind:this={el}
	class="relative flex items-center justify-center overflow-hidden"
	style={h ? `height:${h}px` : 'min-height:82vh'}
>
	<img src={image} alt="" class="absolute inset-0 h-full w-full object-cover" />
	<div class="absolute inset-0 bg-[var(--color-slate)]/55"></div>
	<h1 class="relative z-10 px-6 pt-16 text-center text-4xl text-white sm:text-5xl md:text-6xl">{title}</h1>
</section>
