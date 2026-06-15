<script>
	let { photos = [], perPage = 9, alt = '' } = $props();
	let page = $state(0);

	const pageCount = $derived(Math.ceil(photos.length / perPage));
	const current = $derived(photos.slice(page * perPage, page * perPage + perPage));

	// Lightbox
	let lightbox = $state(null);
</script>

<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
	{#each current as photo}
		<button
			type="button"
			onclick={() => (lightbox = photo)}
			class="aspect-[4/3] overflow-hidden rounded-sm shadow-sm"
			aria-label="View photo"
		>
			<img src={photo} {alt} class="h-full w-full object-cover transition duration-700 hover:scale-105" loading="lazy" />
		</button>
	{/each}
</div>

{#if pageCount > 1}
	<div class="mt-8 flex items-center justify-center gap-3">
		<button
			onclick={() => (page = (page - 1 + pageCount) % pageCount)}
			class="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-slate)] transition hover:bg-[var(--color-slate)] hover:text-white"
			aria-label="Previous">‹</button
		>
		{#each Array(pageCount) as _, i}
			<button
				onclick={() => (page = i)}
				aria-label="Page {i + 1}"
				class="h-2.5 w-2.5 rounded-full transition {i === page ? 'bg-[var(--color-gold)]' : 'bg-[var(--color-line)]'}"
			></button>
		{/each}
		<button
			onclick={() => (page = (page + 1) % pageCount)}
			class="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-slate)] transition hover:bg-[var(--color-slate)] hover:text-white"
			aria-label="Next">›</button
		>
	</div>
{/if}

{#if lightbox}
	<button
		type="button"
		class="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-6"
		onclick={() => (lightbox = null)}
		aria-label="Close"
	>
		<img src={lightbox} {alt} class="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl" />
	</button>
{/if}
