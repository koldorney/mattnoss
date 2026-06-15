<script>
	let { title, sub = '', center = true, light = false, size = 'lg' } = $props();
</script>

<div class={center ? 'text-center' : ''}>
	<h2
		class="{size === 'xl' ? 'text-3xl md:text-5xl' : 'text-3xl md:text-4xl'} {light
			? 'text-white'
			: ''}"
	>
		{title}
	</h2>
	{#if sub}
		<p class="subhead mt-3">{sub}</p>
	{:else}
		<div class="divider {center ? '' : '!mx-0'}"></div>
	{/if}
</div>
